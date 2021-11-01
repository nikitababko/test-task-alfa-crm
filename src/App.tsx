import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import AppRouter from './AppRouter';
import { getCustomers } from 'redux/actions/customerAction';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
`;

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomers());
  });

  return (
    <Container>
      <AppRouter />
    </Container>
  );
};

export default App;
