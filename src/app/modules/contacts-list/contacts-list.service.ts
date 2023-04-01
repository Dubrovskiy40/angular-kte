import {Injectable} from '@angular/core';
import {Store} from "@ngxs/store";
import {LoadUsersList} from "./store/users.actions";

@Injectable()
export class ContactsListService {

  constructor(
    private readonly store: Store,
  ) {
    if (localStorage.getItem('usersState') !== null) {
      return;
    } else {
      this.store.dispatch(new LoadUsersList());
    }

  }
}
