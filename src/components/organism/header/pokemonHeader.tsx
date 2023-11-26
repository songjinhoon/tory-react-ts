import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import PokemonLogo from '../../../assets/pokemonLogo.gif';
import Nav from 'react-bootstrap/Nav';

const PokemonHeader = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
          <img src={PokemonLogo} width={100} height={60} alt={'pokemonLogo'} />
        </Navbar.Brand>
        <Navbar.Brand>POKEMON GAME</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            activeKey={'field'}
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/pokemon" eventKey={'field'}>
              필드
            </Nav.Link>
            <Nav.Link href="/pokemon-dex" eventKey={'dictionary'}>
              도감
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PokemonHeader;
