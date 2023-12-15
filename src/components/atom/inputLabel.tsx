/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { FC } from 'react';
import { Error } from '@components/page/auth/styles';

interface Props {
  register: any;
  field: any;
}

const InputLabel: FC<Props> = ({ register, field }) => {
  return (
    <div css={containerStyles}>
      <div css={inputLabelStyles}>
        <label css={labelStyles}>{field.name}</label>
        <input
          css={inputStyles}
          type={field.name === 'password' ? 'password' : 'text'}
          placeholder={`enter ${field.name}`}
          {...register(field.name, field.option)}
        />
      </div>
      {field.errors && <Error>{field.errors.message}</Error>}
    </div>
  );
};

export default InputLabel;

const containerStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const inputLabelStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  width: 30rem;
`;

const labelStyles = css`
  margin-right: 20px;
  width: 10rem;
  font-size: 16px;
  color: #555;
`;

const inputStyles = css`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease-in-out;
  box-sizing: border-box;
`;
