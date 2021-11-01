import axios from 'axios';

import { IUser } from './TypeScript';

const token: any =
  localStorage.getItem('access_token') && localStorage.getItem('access_token');

export const postAPI = async (url: string, user: IUser) => {
  console.log(user);

  const res = await axios.post(url, user);

  return res;
};

export const getAPI = async (url: string) => {
  const res = await axios.post(
    url,
    {
      some_field: 1,
      page: 0,
    },
    {
      headers: { 'X-ALFACRM-TOKEN': token },
    }
  );

  return res;
};
