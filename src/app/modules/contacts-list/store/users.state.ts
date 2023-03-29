import {FormStateModel, User, UserData} from "../../../types/types";
import {Injectable, NgZone} from "@angular/core";
import {Router} from "@angular/router";
import {Action, Selector, State, StateContext, Store} from "@ngxs/store";
import * as UsersActions from './users.actions';
import {catchError, tap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface UsersStateModel {
  users: User[];
  user: User | null;
  userForm: FormStateModel<Partial<User>>;
  total: number;
}

const usersInitialState: UsersStateModel = {
  users: [],
  user: null,
  userForm: {
    model: {},
    dirty: false,
    status: '',
    errors: [],
  },
  total: 0,
};


@State({
  name: 'usersState',
  defaults: usersInitialState,
})
@Injectable()
export class UsersState {
  constructor (
    private readonly router: Router,
    private readonly ngZone: NgZone,
    private readonly store: Store,
    private readonly http: HttpClient,
  ) {}

  @Selector()
  public static users(state: UsersStateModel) {
    return state.users;
  }

  @Selector()
  public static user(state: UsersStateModel) {
    return state.user;
  }

  @Selector()
  public static total(state: UsersStateModel) {
    return state.total;
  }

  @Action(UsersActions.LoadUsersList)
  public loadUsersList(
    { dispatch }: StateContext<UsersStateModel>,
  ) {
    const usersUrl = 'https://reqres.in/api/users?per_page=12/';

    return this.http.get<UserData>(usersUrl)
      .pipe(
        tap((data) =>
        dispatch(new UsersActions.LoadUsersListSuccess(data)),
        ),
        catchError((error) => {
          dispatch(new UsersActions.LoadUsersListFail(error));

          return throwError(() => error);
        }),
      );
  }

  @Action(UsersActions.LoadUsersListSuccess)
  public loadUsersListSuccess(
    { patchState }: StateContext<UsersStateModel>,
    { payload }: UsersActions.LoadUsersListSuccess,
  ) {
    patchState({
      users: payload.data,
      total: payload.total
    });
  }
}
