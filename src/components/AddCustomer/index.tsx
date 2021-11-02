import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FormSubmit, InputChange } from 'utils/TypeScript';
import { createCustomer } from 'redux/actions/customerAction';

const AddCustomer = () => {
  const initialState = {
    name: '',
    branch_ids: '',
    legal_type: '',
    is_study: '',
  };
  const [newCustomer, setNewCustomer] = useState(initialState);
  const { name, branch_ids, legal_type, is_study } = newCustomer;

  const dispatch = useDispatch();

  const handleChangeInput = (e: InputChange) => {
    const { value, name } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    dispatch(createCustomer(newCustomer));
  };

  return (
    <div>
      <h2>Добавить пользователя</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeInput}
        />
        <input
          type="text"
          name="branch_ids"
          value={branch_ids}
          onChange={handleChangeInput}
        />
        <input
          type="text"
          name="legal_type"
          value={legal_type}
          onChange={handleChangeInput}
        />
        <input
          type="text"
          name="is_study"
          value={is_study}
          onChange={handleChangeInput}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default AddCustomer;
