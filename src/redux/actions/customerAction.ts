import { Dispatch } from 'redux';

import { GET_CUSTOMERS, ICustomerType } from 'redux/types/customerType';

import { getAPI } from 'utils/api';

export const getCustomers =
  (name?: string) => async (dispatch: Dispatch<ICustomerType>) => {
    try {
      // dispatch({
      //   type: ALERT,
      //   payload: { loading: true },
      // });
      const res = await getAPI('/1/customer/index');

      if (name !== undefined && name.length > 0) {
        console.log(name);

        dispatch({
          type: GET_CUSTOMERS,
          payload: res.data.items.filter((customer: any) => {
            return customer.name.toLowerCase().includes(name.toLowerCase());
          }),
        });
      } else {
        dispatch({
          type: GET_CUSTOMERS,
          payload: res.data.items,
        });
      }

      // dispatch({
      //   type: ALERT,
      //   payload: { loading: false },
      // });
    } catch (error: any) {
      // dispatch({
      //   type: ALERT,
      //   payload: { errors: error.response.data.msg },
      // });
    }
  };
