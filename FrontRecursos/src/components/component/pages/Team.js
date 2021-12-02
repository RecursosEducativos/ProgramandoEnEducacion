import React, { Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import './Team.css'

export default class Team extends Component {
    render() {
        return (
                <body className="BodyTutorial">                    
                    <Container id="team-container">
                        <h1>Equipo de Desarrollo</h1>
                        <div id="barra2"></div>
                        <p></p>
                        <Row>
                            <Col lg="3" xs={6}><img src="./imagenes/integrante3.jpg" width="250"></img>
                            </Col>
                            <Col>
                                <p className="p_team">Soy Diseñador Mecánico y Analista Programador, disciplinado, que se reta constantemente a ser mejor profesional y persona, emprendedor a tiempo completo que ve en la programación una herramienta importante en el desarrollo del pensamiento creativo.
                                <br>
                                </br>
                                <a href="https://github.com/RecursosEducativos" target="_blank" class="logo">
                                <img className="imagen_logo" src="./imagenes/logo1.png" alt="GitHub" width="30" height="30"></img> 
                                </a> 
                                <a href="https://www.linkedin.com/in/recursos-educativos/" target="_blank" class="logo">
                                <img src="./imagenes/logo2.png" alt="GitHub" width="30" height="30"></img>  
                                </a>                                 
                                </p>

                                
                                
                            </Col>
                            <Col lg="3"  >
                                <img src="./imagenes/integrante2.jpg" width="250"></img>
                            </Col>
                            <Col lg="3">
                                <p className="p_team">Soy Ingeniro  Electrónico, con experiencia en soporte técnico y bases de datos, estudiante de desarrollo de software, apasionada por las mejoras de procesos, Creativa y fiel creyente que el compartir conocimientos y ayuda a los demás nos hace crecer infinitamente
                                <br>
                                </br>
                                <a href="https://github.com/aigleetlion" target="_blank" class="logo">
                                <img className="imagen_logo" src="./imagenes/logo1.png" alt="GitHub" width="30" height="30"></img> 
                                </a> 
                                <a href="https://www.linkedin.com/in/aigleetlion/" target="_blank" class="logo">
                                <img src="./imagenes/logo2.png" alt="GitHub" width="30" height="30"></img>  
                                </a>                                 
                                </p>        
                                
                            
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="3" >
                                <p className="p_team">Soy profesional en Administración Financiera, procesamiento y digitalización de información, planeación y ejecución de procesos; actualmente estudio programación y diseño web con capacidades de diagnóstico, innovación y gestión de alternativas con el propósito de alcanzar niveles óptimos de desempeño.
                                <br>
                                </br>
                                <a href="https://github.com/edemoncada" target="_blank" class="logo">
                                <img className="imagen_logo" src="./imagenes/logo1.png" alt="GitHub" width="30" height="30"></img> 
                                </a> 
                                <a href="https://www.linkedin.com/in/edelmira-moncada/" target="_blank" class="logo">
                                <img src="./imagenes/logo2.png" alt="GitHub" width="30" height="30"></img>  
                                </a>                                 
                                </p>
                            
                            </Col>
                            <Col><img src="./imagenes/integrante4.jpg" width="250"></img></Col>
                            <Col>
                                <p className="p_team">Soy Administradora de empresas enfocada en el sector inmobiliario hace más de 15 años.  Me encuentro aprendiendo programación y he descubierto que es un universo con infinitas posibilidades. Me ilusiona un proyecto en el que pueda aportar valor y crecer profesional y personalmente.
                                <br>
                                </br>
                                <a href="https://github.com/Pauleja" target="_blank" class="logo">
                                <img className="imagen_logo" src="./imagenes/logo1.png" alt="GitHub" width="30" height="30"></img> 
                                </a> 
                                <a href="https://www.linkedin.com/in/paula-a-guerrero" target="_blank" class="logo">
                                <img src="./imagenes/logo2.png" alt="GitHub" width="30" height="30"></img>  
                                </a>                                 
                                </p>
                            
                            </Col>
                            <Col><img src="./imagenes/integrante1.jpg" width="250"></img></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col><img src="./imagenes/integrante5.jpg" width="250"></img></Col>
                            <Col>
                                <p className="p_team2">Soy una persona emprendedora, dedicada a mi trabajo, alegre, creativa, solidaria y amable. Con cualidades para el servicio al cliente y trabajo bajo presión en tiempos cortos de producción.
                                <br>
                                </br>
                                <a href="https://github.com/Doszettas" target="_blank" class="logo">
                                <img className="imagen_logo" src="./imagenes/logo1.png" alt="GitHub" width="30" height="30"></img> 
                                </a> 
                                <a href="https://www.linkedin.com/in/zoraida-zambrano-95a23720/" target="_blank" class="logo">
                               <img src="./imagenes/logo2.png" alt="GitHub" width="30" height="30"></img>  
                                </a>                                 
                                </p>
                                </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </body>
        )
}
}
