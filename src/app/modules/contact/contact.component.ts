import {Component, Input, OnInit} from '@angular/core';
import {UsersState} from "../contacts-list/store/users.state";
import {Store} from "@ngxs/store";
import {User} from "../shared/types/types";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() public userId!: number;
  public currentContact!: User;

  constructor(
    private readonly store: Store,
  ) {}

  public ngOnInit() {
    this.store.select(UsersState.users)
      .pipe(untilDestroyed(this))
      .subscribe((users) => {
        users.filter((el) => {
          if(el.id === this.userId) {
            this.currentContact = el;
          }
        })
      });
  }
}
