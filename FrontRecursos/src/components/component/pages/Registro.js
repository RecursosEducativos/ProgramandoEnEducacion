


/* import React, {Fragment,UseState} from 'react';




const Registro = () => {
    const [datos, setDatos]= UseState({

        nombre:'',
        apellido_p:'',
        apellido_m:'',
        telefono:'',
        mail:'',
        direccion:''
    })

const handleInputChange = (event)=> {
    setDatos({
        ...datos,
        [event.target.name]: event.target.value
    })
}
const enviarDatos=(event) => {
   //evita el envio automatico de los datos
    event.prevenDefault();
    console.log(datos.nombre)
}
return (
    <Fragment>

        <h1>Registro</h1>
        <form className="rpw" onSubmit={enviarDatos}>
            <div className="col-md-6">
                <input
                    placeholder="Ingrese nombre"
                    className="form-control"
                    type="text"
                    name="nombre"></input>
            </div>
            <div className="col-md-6">
                <button className="btn btn-primary" type="submit">Enviar</button>
            </div>
        </form>
    </Fragment>
);
}
export default Registro; */
import React from "react";
import { Container, Row, Form, Button } from 'react-bootstrap';



export default class Empleadoscrear extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
                empleado:{
                nombre:"",
                apellido_p: "",
                apellido_m: "",
                telefono: "",
                mail: "",
                direccion: "",
            }
        };
    }
    setValue(index, value){
        this.setState ({
            empleado: {
                ...this.state.empleado,
                [index]: value,
            },
        });
    }
    guardarEmpleados(){
        
        this.request
        .post('/empleados', this.state.empleado)
        .then((response) => {
        if (response.data.exito){
            this.props.changeTab('buscar');

        }
        
    })
    .catch ((err) => {
        console.error(err);
        this.setState({loading: true });
       
    })
}

    
    render() { 
        return ( 
            
            <Container id="empleados-crear-container">
                  <div id="barra5"></div>
               <body className="body">
                <Row>
                    <h2> Crear Empleados</h2>
                </Row>

                <Row>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control 
                            onChange={(e) => this.setValue('nombre', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Apellido Paterno</Form.Label>
                            <Form.Control 
                            onChange={(e) => this.setValue('apellido_p', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Apellido Materno</Form.Label>
                            <Form.Control 
                            onChange={(e) => this.setValue('apellido_m', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control 
                            onChange={(e) => this.setValue('telefono', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control 
                            onChange={(e) => this.setValue('mail', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control 
                            onChange={(e) => this.setValue('nacionalidad', e.target.value)}
                            />
                        </Form.Group>

                        
                        <Button variant="success" onClick={()=> console.log (this.guardarEmpleados())}>
                            Guardar Empleado
                        </Button>
                        </Form>
                </Row>
                </body>
            </Container>
            
        );
    }
}