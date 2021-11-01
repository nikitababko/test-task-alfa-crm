import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootStore } from 'utils/TypeScript';

const CardContainer = styled.div`
  width: 800px;
`;

const CustomerContainer = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid #000;
`;

const Span = styled.span`
  display: block;
  margin: 10px 0;
`;

const Card: FC = () => {
  const { customers } = useSelector((state: RootStore) => state);
  return (
    <CardContainer>
      {customers.map((customer) => (
        <CustomerContainer key={customer.id}>
          <Span>Имя: {customer.name}</Span>
          <Span>
            Дата рождения:{' '}
            {customer.dob.length > 0 ? customer.email : 'отсутствует'}
          </Span>
          <Span>Остаток на счете: {customer.balance}</Span>
          <Span>Дата деактивации: {customer.e_date}</Span>
          <Span>
            Email: {customer.email.length > 0 ? customer.email : 'отсутствует'}
          </Span>
          <Span>Телефон: {customer.phone}</Span>
          <Span>
            Адрес: {customer.addr.length > 0 ? customer.email : 'отсутствует'}
          </Span>
        </CustomerContainer>
      ))}
    </CardContainer>
  );
};

export default Card;
