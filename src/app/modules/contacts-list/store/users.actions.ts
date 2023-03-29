import {UserData} from "../../../types/types";

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
