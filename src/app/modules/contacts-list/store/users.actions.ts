import {User, UserData} from "../../shared/types/types";

export class LoadUsersList {
  public static readonly type = '[Users] Load Users List';
  constructor() {}
}

export class LoadUsersListSuccess {
  public static readonly type = '[Users] Load Users List Success';
  constructor(public payload: UserData) {}
}

export class LoadUsersListFail {
  public static readonly type = '[Users] Load Users List Fail';
  constructor(public payload: unknown) {}
}

export class DeleteUser {
  public static readonly type = '[Users] Delete User';
  constructor(public id: number) {}
}

export class AddUser {
  public static readonly type = '[Users] Add User';
  constructor(public payload: User) {}
}
