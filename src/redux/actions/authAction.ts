import { Dispatch } from 'redux';
import { IAuthType } from 'redux/types/authType';
import { GET_CUSTOMERS, ICustomerType } from 'redux/types/customerType';

import { getAPI, postAPI } from 'utils/api';
import { IUser } from 'utils/TypeScript';

export const authCustomer =
  (user: IUser) => async (dispatch: Dispatch<IAuthType>) => {
    try {
      // dispatch({
      //   type: ALERT,
      //   payload: { loading: true },
      // });
      const res = await postAPI('/auth/login', user);

      console.log(res);

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
