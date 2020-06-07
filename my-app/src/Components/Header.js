import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Header() {
  return (
    <div>
      <Navbar collapseOnSelect fixed='top'  expand="lg" className='header  justify-content-between' >
      <Nav className=" mr-auto" inline>
            <Nav.Link href="#home" ><h4 className='navTextItem navBrand'>AGATA NOWICKA</h4> <h6 className='navTextFrontEnd'>Frot-end developer</h6></Nav.Link>
          </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className=" rightNav  mr-auto" inline  >
          <Nav.Link href="#home" ><h6 className='navTextItem'>Home</h6></Nav.Link>
            <Nav.Link href="#aboutMe" ><h6 className='navTextItem'>O mnie</h6></Nav.Link>
            <Nav.Link href="#technologies" ><h6 className='navTextItem'>Technologie</h6></Nav.Link>
            <Nav.Link href="#portfolio" ><h6 className='navTextItem'>Portfolio</h6></Nav.Link>
            <Nav.Link href="#contact" ><h6 className='navTextItem'>Kontakt</h6></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr></hr>
    </div>

  )
}