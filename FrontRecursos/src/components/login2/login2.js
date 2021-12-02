import React from 'react'; 
import axios from 'axios';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { APIHOST as host } from '../../app.json';
import './login.css';
import { isNull} from 'util';
import Cookies from 'universal-cookie';
import { calculaExpiracionSesion } from '../helper/helper';
import Loading from '../loading/loading';

const cookies = new Cookies ();

export default class login2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading : false,
            usuario: '',
            pass: '',
        };
      }
      
    render() {
    return (
      <Container id= "login-container">

        <Loading show= {this.state.loading} />

      <Row>
          <Col>
          <Row>
              <h2> PRUEBA LOGIN SESION</h2>
          </Row>
          <Row>
              <Col
                    sm="12"
                    xs="12"
                    md={{ span:4, offset:4 }}
                    lg={{ span:4, offset:4 }}
                    xl={{ span:4, offset:4 }}
                    >
                <h2>ESTO ES</h2>
          </Col>
          </Row>
          </Col>
          </Row>
        </Container>
        );
        
    }
}
