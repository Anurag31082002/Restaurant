import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHome, faList, faSearch } from '@fortawesome/free-solid-svg-icons';
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import { Navbar, Container, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand className='homespan'>Restaurant</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <li><Link to="/"><FontAwesomeIcon icon={faHome} /></Link></li>
                </Nav.Link>
                <Nav.Link>
                  <li><Link to="/list"><FontAwesomeIcon icon={faList}/></Link></li>
                </Nav.Link>
                <Nav.Link>
                  <li><Link to="/create"><FontAwesomeIcon icon={faPlus}/></Link></li>
                </Nav.Link>
                <Nav.Link>
                  <li><Link to="/search"><FontAwesomeIcon icon={faSearch}/></Link></li>
                </Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<RestaurantList />} />
          <Route path="/create" element={<RestaurantCreate />} />
          <Route path="/search" element={<RestaurantSearch />} />
          <Route path="/update/:id" element={<RestaurantUpdate />} /> {/* Corrected here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
