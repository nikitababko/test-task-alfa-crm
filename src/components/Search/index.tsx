import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCustomers } from 'redux/actions/customerAction';

import { Input } from 'UI';
import { InputChange } from 'utils/TypeScript';

const Search: FC = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  dispatch(getCustomers(search));

  const handleChangeInput = (e: InputChange) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Input
        search={search}
        handleChangeInput={handleChangeInput}
        label="Поиск"
        placeholder="Поиск"
      />
    </div>
  );
};

export default Search;
