import { IUser } from 'utils/TypeScript';

export const GET_CUSTOMERS = 'GET_CUSTOMERS';
export const AUTH_CUSTOMERS = 'AUTH_CUSTOMERS';

export interface IGetCustomers {
  type: typeof GET_CUSTOMERS;
  payload: any[];
}

export interface IAuthCustomer {
  type: typeof AUTH_CUSTOMERS;
  payload: IUser;
}

export type ICustomerType = IGetCustomers | IAuthCustomer;
