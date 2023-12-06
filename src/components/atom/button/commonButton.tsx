import { CSSProperties, FC, ReactNode } from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  background-color: lightskyblue; /* Green background color */
  color: white; /* White text color */
  padding: 5px 20px; /* Padding inside the button */
  font-size: 16px; /* Font size */
  border: none; /* Remove border */
  border-radius: 5px; /* Add border radius */
  cursor: pointer; /* Add a pointer cursor on hover */
  transition: background-color 0.3s; /* Add a smooth transition */

  &:hover {
    background-color: deepskyblue; /* Darker green on hover */
  }
`;

interface Props {
  children: ReactNode;
  event?: () => void;
  style?: CSSProperties;
}

const CommonButton: FC<Props> = ({ children, event, style = {} }) => {
  if (event) {
    return <Button onClick={event} style={style}>{children}</Button>;
  }

  return <Button style={style}>{children}</Button>;
};
export default CommonButton;
