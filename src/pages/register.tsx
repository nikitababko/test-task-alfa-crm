import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { FormSubmit, InputChange } from 'utils/TypeScript';
import { Button, Input } from '../UI';
import { authCustomer } from 'redux/actions/authAction';

const Container = styled.div`
  padding: 40px;
  box-shadow: 21px 12px 44px -6px #000;
`;

const Register: FC = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeInputE = (e: InputChange) => {
    setEmail(e.target.value);
  };

  const handleChangeInputP = (e: InputChange) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    dispatch(authCustomer({ email, api_key: password }));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <Input
          label="Email"
          placeholder="Введите свой Email"
          handleChangeInput={handleChangeInputE}
        />
        <Input
          label="Пароль"
          placeholder="Введите свой пароль"
          handleChangeInput={handleChangeInputP}
        />
        <Button />
      </form>
    </Container>
  );
};

export default Register;
