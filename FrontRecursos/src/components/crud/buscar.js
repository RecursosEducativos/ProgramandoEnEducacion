import React from 'react';

import { Container, Row } from 'react-bootstrap';
//import './empleados.css';
import Datagrid from '../grid/grid';


const columns = [
    {
    dataField: '_id',
    text: ' ID',
    hidden: true,
}, {
    dataField: 'nombre',
    text: 'Estudiante'
}, {
    dataField: 'apellido_p',
    text: 'Primer Apellido'
}, {
    dataField: 'apellido_m',
    text: 'Segundo Apellido'
},
{
    dataField: 'telefono',
    text: 'Teléfono'
},

{
    dataField: 'mail',
    text: 'Correo Electrónico'
},
{
    dataField: 'direccion',
    text: 'Nacionalidad'
},
];


export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
        this.onClickEditButton = this.onClickEditButton.bind(this);
    }

    componentDidMount() { }
    
    onClickEditButton(row) {
    this.props.getIdEmpleado(row._id);
    
    this.props.changeTab('editar');
    }
    

    render() { 

        return  (
            <Container id="empleados-buscar-container">
                <Row>
                    <h2>Buscar Estudiante</h2>
                </Row>
                <Row>
                    <Datagrid url="/empleados" 
                    columns={columns} 
                    showEditButton={true}
                    onClickEditButton={this.onClickEditButton}/>
                </Row>
            </Container>
        );
    }
}