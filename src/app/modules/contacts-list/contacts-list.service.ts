import {Injectable} from '@angular/core';
import {Store} from "@ngxs/store";
import {LoadUsersList} from "./store/users.actions";

@Injectable()
export class ContactsListService {
  // private userUrl = 'https://reqres.in/api/users';
  // private usersUrl = 'https://reqres.in/api/users?per_page=12/';

  constructor(
    private readonly store: Store,
  ) {
    this.store.dispatch(new LoadUsersList())
  }

  // public getUser(id: number): Observable<UserData> {
  //   return this.http.get<UserData>(`${this.usersUrl}/${id}`);
  // }
  //
  // public getUsersList(): Observable<UserData> {
  //   return this.http.get<UserData>(this.usersUrl);
  // }
}
