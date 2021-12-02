
import React from 'react';

import { Navbar, Container, Nav, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import './navbar.css'

export default class Menu  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <nav className="navbar">
            <Navbar className="navbar navbar-expand-lg navbar-light  fixed top">
                <Container>
                <img src="./imagenes/logo.jpg" width="120" height="120"/>
                    <Navbar.Brand href="#home">
                   
                    <ul className="navbar-nav" mx-left>
                        <li><Nav.Link href="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inicio</Nav.Link></li>
                        <li><Nav.Link href="/nosotros">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nosotros</Nav.Link></li>
                        <li><Nav.Link href="/blog">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blog</Nav.Link></li>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            
                           
                        <DropdownButton id="dropdown-item-button" title="Servicios" variant="light">
  
                            <Dropdown.Item as="button"><Nav.Link href="/servicios">Seminarios</Nav.Link></Dropdown.Item>
                            <Dropdown.Item as="button"><Nav.Link href="/servicios">Desarrollo de App</Nav.Link></Dropdown.Item>
                            <Dropdown.Item as="button"><Nav.Link href="/servicios">Proyectos educativos</Nav.Link></Dropdown.Item>
                            {/* <Dropdown.Item as="button"><Nav.Link to={{
                                pathname:"/servicios",
                                search:"?sort=name",
                                hash:"#servicio3",
                                state:{fromDashboard:true}
                            }}/>Proyectos Educativos</Dropdown.Item> */}
                        </DropdownButton>
                        
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            
                           
                        <DropdownButton className="DropdownButton" title="Menú" font-size="20px"variant="light" >
  
                            <Dropdown.Item as="button"  translate="no"><Nav.Link href="/scratch">Scratch</Nav.Link></Dropdown.Item>
                            <Dropdown.Item as="button"><Nav.Link href="/appinventor">AppInventor2</Nav.Link></Dropdown.Item>
                            <Dropdown.Item as="button"  translate="no"><Nav.Link href="/snap">Snap</Nav.Link></Dropdown.Item>
                            <Dropdown.Item as="button"><Nav.Link href="/aprendejugando">Aprende Jugando</Nav.Link></Dropdown.Item>
                            <Dropdown.Item as="button"><Nav.Link href="/tutoriales">Tutoriales</Nav.Link></Dropdown.Item>
                            
                        </DropdownButton>
                        <li className="nav-item">
          <Nav.Link href="/registro">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Registro&nbsp;&nbsp;</Nav.Link>
        </li>
        <Nav.Link href="/Login"variant="info"><img src="./imagenes/login.png" width="50" height="50"/></Nav.Link>


                    </ul>
                    </Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                  
                </Nav>
                <DropdownButton id="dropdown-basic-button" title="usuario">
                    <Dropdown.Header>
                    <Row>
                    <FontAwesomeIcon icon={faUserCircle} />
                    </Row>

                    <Row> 
                        #USUARIO# 
                    </Row> 

                    </Dropdown.Header>

                    <Dropdown.Item href="#/action-1">Cerrar Sesion</Dropdown.Item>
                  
            </Navbar.Collapse>*/}
        </Container>
    </Navbar> 
    </nav>
    );
    }
}
