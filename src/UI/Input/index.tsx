import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  margin: 10px 0;

  :first-child {
    margin-top: 20px;
  }
`;

interface IProps {
  label: string;
  placeholder: string;
  search?: string;
  handleChangeInput: (text: any) => any;
}

const Input: FC<IProps> = (props) => {
  const { search, handleChangeInput, label, placeholder } = props;

  return (
    <Container>
      <Label>
        {label}
        <input
          value={search}
          onChange={handleChangeInput}
          type="text"
          placeholder={placeholder}
        />
      </Label>
    </Container>
  );
};

export default Input;
