import styled from '@emotion/styled';
import { FC } from 'react';

const Button = styled.button`
  border: none;
  width: 100%;
  border-top: 1px solid rgb(29, 28, 29);
  background: transparent;
  display: block;
  height: 33px;
  padding: 5px 20px 5px;
  outline: none;
  cursor: pointer;
`;

interface Props {
  text: string;
  event: () => void;
}

const EventButton: FC<Props> = ({ text, event }) => {
  return <Button onClick={event}>{text}</Button>;
};

export default EventButton;
