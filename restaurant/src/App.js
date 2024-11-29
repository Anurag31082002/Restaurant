import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from 'react-router-dom'
import Home from "./components/Home"
import RestaurantCreate from "./components/RestaurantCreate"
import RestaurantDetails from "./components/RestaurantDetails"
import RestaurantList from "./components/RestaurantList"
import RestaurantSearch from "./components/RestaurantSearch"
import RestaurantUpdate from "./components/RestaurantUpdate"
import {Navbar, Container, Nav } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="light" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><li><Link to="/">Home</Link></li></Nav.Link>
            <Nav.Link ><li><Link to="/list">List</Link></li></Nav.Link>
            <Nav.Link ><li><Link to="/create">Create</Link></li></Nav.Link>
            <Nav.Link ><li><Link to="/search">Search</Link></li></Nav.Link>
            <Nav.Link><li><Link to="/update">Update</Link></li></Nav.Link>
      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<RestaurantList />} />
          <Route path="/create" element={<RestaurantCreate />} />
          <Route path="/search" element={<RestaurantSearch />} />
          <Route path="/update" element={<RestaurantUpdate />} />
          <Route path="/details" element={<RestaurantDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
