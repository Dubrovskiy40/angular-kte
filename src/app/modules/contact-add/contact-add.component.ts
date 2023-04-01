import {Component, OnDestroy, OnInit} from '@angular/core';
import {User, UserForm} from "../shared/types/types";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ResetForm} from "@ngxs/form-plugin";
import {Store} from "@ngxs/store";
import {AddUser} from "../contacts-list/store/users.actions";
import {UsersState} from "../contacts-list/store/users.state";
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {Router} from "@angular/router";

@UntilDestroy()
@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit, OnDestroy{
  public userForm: FormGroup<UserForm>;
  private total!: number;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly store: Store,
    private readonly router: Router,
    ) {
    this.userForm = this.buildForm();
  }

  public ngOnInit() {
    this.store.select(UsersState.total)
      .pipe(untilDestroyed(this))
      .subscribe((total) => this.total = total);
  }

  public get formValue(): User {
    const { ...value } = this.userForm.getRawValue();

    return {
      ...value,
      id: this.total + 1,
    };
  }

  public ngOnDestroy(): void {
    this.resetUserForm();
  }

  public submitUserForm() {
    if (!this.userForm.valid) {
      return;
    }
    this.store.dispatch(new AddUser(this.formValue));

    void this.router.navigate(['/', 'contacts']);
  }
  public clear() {
    this.userForm.reset();
  }

  private resetUserForm() {
    this.store.dispatch(
      new ResetForm({
        path: 'usersState.userForm',
      }),
    );
  }

  private buildForm(): FormGroup<UserForm> {
    const form = this.formBuilder.group({
      email: this.formBuilder.control('', {
        validators: [Validators.email, Validators.required],
        nonNullable: true,
      }),
      first_name: this.formBuilder.control('', {
        validators: Validators.required,
        nonNullable: true,
      }),
      last_name: this.formBuilder.control('', {
        validators: Validators.required,
        nonNullable: true,
      }),
      avatar: this.formBuilder.control('https://play-lh.googleusercontent.com/c_RFVsWfu89ctt7B6smzohv5UBVietoRji26alQNBlOJP6if4LzJAkL3Bw-2MxvuUKk', {
        validators: Validators.required,
        nonNullable: true,
      }),
    });

    return form;
  }
}
