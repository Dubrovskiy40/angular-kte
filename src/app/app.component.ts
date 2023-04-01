import {Component, OnInit} from '@angular/core';
import {UsersState} from "./modules/contacts-list/store/users.state";
import {Store} from "@ngxs/store";
import {LoadUsersList} from "./modules/contacts-list/store/users.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public usersTotal$ = this.store.select(UsersState.total);

  constructor(private readonly store: Store) {}

  public ngOnInit() {
    this.getNewContactsList();
  }

  private getNewContactsList() {
    this.usersTotal$.subscribe((num) => {
      if(num < 1) {
        this.store.dispatch(new LoadUsersList());
      }
    })
  }
}
