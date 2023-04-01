import {FormControl} from "@angular/forms";

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserData {
  data: User[];
  page: number;
  per_page: number;
  support: {
    url: string;
    text: string;
  };
  total: number;
  total_pages: number;
}

export interface FormStateModel<T> {
  model: T;
  dirty: boolean;
  status: string;
  errors: string[];
}

export interface UserForm {
  email: FormControl<string>;
  first_name: FormControl<string>;
  last_name: FormControl<string>;
  avatar: FormControl<string>;
}

export interface UsersStateModel {
  users: User[];
  user: User | null;
  userForm: FormStateModel<Partial<User>>;
  total: number;
}
