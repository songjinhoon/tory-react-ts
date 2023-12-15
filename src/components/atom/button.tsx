import { CSSProperties, FC, ReactNode } from 'react';
import styled from '@emotion/styled';

interface Props {
  children: ReactNode;
  event?: () => void;
  style?: CSSProperties;
}

const Button: FC<Props> = ({ children, event, style = {} }) => {
  if (event) {
    return (
      <Container onClick={event} style={style}>
        {children}
      </Container>
    );
  }

  return <Container style={style}>{children}</Container>;
};
export default Button;

const Container = styled.button`
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
