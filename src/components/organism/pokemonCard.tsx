import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import styled from '@emotion/styled';
import { Card } from 'react-bootstrap';

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

const PokemonCard = ({ name }: { name: string }) => {
  const { data, mutate, isLoading } = useSWR<any>(
    `/api/v2/pokemon/${name}`,
    fetcher,
    {
      dedupingInterval: 60000,
    },
  );

  return (
    <>
      {!isLoading && (
        <>
          <Card>
            <div style={{ height: 100 }}>
              <Test src={data.sprites.front_shiny}></Test>
            </div>
            <Card.Body>
              <Card.Title>{data.species.name}</Card.Title>
              <Card.Text>Introduce...</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </>
      )}
    </>
  );
};

export default PokemonCard;
