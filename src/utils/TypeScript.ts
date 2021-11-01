import { ChangeEvent, FormEvent } from 'react';

import rootReducer from 'redux/reducers/index';

export type RootStore = ReturnType<typeof rootReducer>;

export type FormSubmit = FormEvent<HTMLFormElement>;

export interface ICustomer {
  id: number;
  name: string;
  dob: string;
  balance: number;
  e_date: string;
  email: string;
  phone: number;
  addr: string;
}

export interface IUser {
  email: string;
  api_key: string;
}

export type InputChange = ChangeEvent<HTMLInputElement>;
