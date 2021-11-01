import * as type from 'redux/types/customerType';
import { ICustomer } from 'utils/TypeScript';
import { GET_CUSTOMERS } from '../types/customerType';

const customerReducer = (
  state: ICustomer[] = [],
  action: type.ICustomerType
): ICustomer[] => {
  switch (action.type) {
    case GET_CUSTOMERS:
      return action.payload;

    default:
      return state;
  }
};

export default customerReducer;
