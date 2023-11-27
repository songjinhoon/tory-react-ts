import useSWR from 'swr';
import fetcher from '@utils/fetcher';
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

const PokemonCardGroupItem = ({ name, index, setIsComplete }: any) => {
  const { data, mutate, isLoading } = useSWR<any>(
    `/api/v2/pokemon/${name}`,
    fetcher,
    {
      dedupingInterval: 60000,
    },
  );

  useEffect(() => {
    if (index && index === 2) {
      console.log('한번호출');
      setIsComplete(true);
    }
  }, [index]);

  return (
    <>
      {/*      <Card>
        <div style={{ height: 100 }}>
          <p>ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ</p>
        </div>
        <Card.Body>
          <Card.Title>ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ</Card.Title>
          <Card.Text>Introduce...</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>*/}
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

export default PokemonCardGroupItem;
