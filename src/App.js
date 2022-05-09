import 'bootstrap/dist/css/bootstrap.min.css';
import image from './image/image.jpg';
import './style.css';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';

function App() {
  return (
    <>
    <div className="App">
     <Navbar bg="light" expand="lg">
 <Container>
   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="me-auto">
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
   </Navbar.Collapse>
 </Container>
</Navbar>
    </div> 
   <div   style={{border:'solid 1px black',width:'100vw'}}>

   <h1 className='title red'>Your name here</h1>

   <br />
  <div className='hello'>
  <img src={image} alt="imageInSrc" />

  <br /> 

 <img src="/image.jpg" alt="imageInPublic" />
  </div>


  </div>

  <video width='320' height='240' controls>

   <source src="myVideo.mp4" type="video/mp4" />

  </video> 
  </> 
  );
}

export default App;
