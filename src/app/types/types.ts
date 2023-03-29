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
