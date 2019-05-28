import React from 'react';
import { 
  ToggleButtonGroup,
  ToggleButton,
  Navbar, 
  Nav, 
  NavDropdown, 
  Form, 
  FormControl, 
  Row, 
  Col, 
  Card, 
  Button, 
  ButtonToolbar, 
  ListGroup 
} from 'react-bootstrap';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    const pokemon = require('./pokemon.json')
    const types = pokemon.map(poke => {
      return poke.types
    })
    this.myRef = React.createRef()
    const merged = [].concat.apply([], types);

    const uniqueValues = [...new Set(merged)]; 

    this.state = {
      allPokemon: pokemon,
      pokemon,
      types: uniqueValues
    }
  }

  componentDidMount() {
    this._div.scrollTop = 10

  }

  renderPokemonType(types) {
    return types.map(type => {
      return <ListGroup.Item key={type} >{type.charAt(0).toUpperCase() + type.slice(1)}</ListGroup.Item>
    })
  }

  renderPokemon() {
    const { pokemon } = this.state

    const pokemons = pokemon.map(({ national_id, description, name, art_url, types }) => {
      return (
        <Col ref={ref => this._div = ref} key={name} sm={12} md={4} style={{ marginBottom: 10, padding: 10 }}>
          <Card>
            <Card.Img variant="top" src={art_url} />
            <Card.Body>
              <Card.Title>{national_id}: {name}</Card.Title>
                <Card.Text>
                  {description}
                </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <ListGroup variant="flush">
              {this.renderPokemonType(types)}
            </ListGroup>
          </Card>
        </Col>
      )
    })
    return pokemons
  }

  renderNavBar() {
    return (
      <Navbar bg="light" expand="lg" style={{ marginBottom: 15 }}>
          <Navbar.Brand href="#home">Pokedex</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
    )
  }

  onChange = (e) => {
    const { allPokemon } = this.state
    
    let newPokemon = allPokemon.filter(poke => poke.types.some(r=> e.includes(r)))
    this.setState({ pokemon: newPokemon })
  }

  getTypeCount(type) {
    const { allPokemon } = this.state

    const filteredTypeCount = allPokemon.filter((poke) => poke.types.includes(type))
    return filteredTypeCount.length
  }

  renderPokemonTypeCheckboxes = () => {
    const { types } = this.state
    const typesHTML = types.map(type => {
      return <ToggleButton value={type}>{type} {this.getTypeCount(type)}</ToggleButton>
    })
    return typesHTML
  }

  renderTypeSelectionBar() {
    return (
      <ButtonToolbar>
        <ToggleButtonGroup 
          type="checkbox" 
          onChange={this.onChange}
        >
          {this.renderPokemonTypeCheckboxes()}
        </ToggleButtonGroup>
      </ButtonToolbar>
    )
  }

  renderTotalCount() {
    const { pokemon } = this.state
    console.log('la', pokemon.length)
    return <h1>Current Count: {pokemon.length}</h1>
  }

  go = () => {
    console.log('go')
    this._div.scrollTop = 0
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: 'smooth'
    })
    console.log('go2')
  }


  render() {
    return (
      <div style={{ backgroundColor: 'yellow', padding: 20 }}>
          {this.renderNavBar()}
          {this.renderTypeSelectionBar()}
          {this.renderTotalCount()}
          <Row>
            {this.renderPokemon()}
            <div onClick={this.go} style={{ position: 'fixed', height: 100, width: 100, backgroundColor: 'red', bottom: 10, right: 10 }}></div>
          </Row>
      </div>
    )
  }
}

export default App;
