import React, { FC } from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
  padding: 10px 30px;
  background-color: rgb(32, 94, 220);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  :hover {
    background-color: rgb(32, 94, 220, 0.8);
  }
`;

const Button: FC = () => {
  return <MyButton>Submit</MyButton>;
};

export default Button;
