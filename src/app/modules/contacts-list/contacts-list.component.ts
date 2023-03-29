import {Component, OnInit} from '@angular/core';
import {ContactsListService} from "./contacts-list.service";
import {User} from "../../types/types";
import {Store} from "@ngxs/store";
import {UsersState} from "./store/users.state";

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
  providers: [
    ContactsListService,
  ],
})
export class ContactsListComponent implements OnInit {
  public user!: User;
  public usersList$ = this.store.select(UsersState.users);

  constructor(
    private readonly contactsListService: ContactsListService,
    private readonly store: Store,
  ) {}

  ngOnInit() {
  }
}
