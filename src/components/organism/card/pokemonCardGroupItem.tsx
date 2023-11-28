import styled from '@emotion/styled';
import { Card } from 'react-bootstrap';
import { useEffect } from 'react';

const Test = styled.img`
  animation: motion 0.3s linear 0s infinite alternate;
  @keyframes motion {
    0% {
      padding-top: 0;
    }
    100% {
      padding-top: 10px;
    }
  }
`;

const PokemonCardGroupItem = ({
  name,
  resource,
  index,
  setIsComplete,
  ref,
}: any) => {
  useEffect(() => {
    if (ref) {
      console.log('있다~');
    }
  }, []);

  useEffect(() => {
    if (index && index === 2) {
      console.log('한번호출');
      setIsComplete(true);
    }
  }, [index]);

  return (
    <>
      <Card>
        <div style={{ height: 100 }}>
          <Test
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${resource
              .substring(resource.lastIndexOf('/pokemon/') + 9)
              .replace('/', '')}.png`}
          ></Test>
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Introduce...</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </>
  );
};

export default PokemonCardGroupItem;
