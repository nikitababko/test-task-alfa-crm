import axios from 'axios';

import { IUser } from './TypeScript';

const token = '32fc9435871de7620cd9851c2e337193';

export const postAPI = async (url: string, user: IUser) => {
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
