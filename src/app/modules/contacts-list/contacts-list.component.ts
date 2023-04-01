import {Component} from '@angular/core';
import {ContactsListService} from "./contacts-list.service";
import {Store} from "@ngxs/store";
import {UsersState} from "./store/users.state";
import {DeleteUser} from "./store/users.actions";
import {NzModalService} from "ng-zorro-antd/modal";
import {ContactComponent} from "../contact/contact.component";

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
  providers: [
    ContactsListService,
  ],
})
export class ContactsListComponent {
  public usersList$ = this.store.select(UsersState.users);

  constructor(
    private readonly contactsListService: ContactsListService,
    private readonly store: Store,
    private readonly modalService: NzModalService
  ) {}

  public openContact(id: number) {
    this.modalService.create<ContactComponent>({
      nzContent: ContactComponent,
      nzComponentParams: {
        userId: id,
      },
      nzStyle: {
        width: '100%',
        maxWidth: '650px',
      },
    })
  }

  public deleteContact(id: number) {
    this.modalService.confirm({
      nzTitle: 'Ты точно хочешь удалить меня из контактов?',
      nzOkText: 'Да',
      nzCancelText: 'Нет',
      nzOnOk: () => true,
    })
      .afterClose
      .subscribe((result) =>
        result && this.store.dispatch(new  DeleteUser(id)),
      );
  }
}
