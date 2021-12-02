import React from 'react';
import { BrowserRouter as Router,  Switch} from 'react-router-dom';
import login from '../login/login';
import Inicio from '../component/pages/Inicio'
import Nosotros from '../component/pages/Nosotros';
import Blog from '../component/pages/Blog'
import Politicas from '../component/pages/politicas';
import Snap from '../component/pages/Snap'
import Registro from '../component/pages/Registro'
import Servicios from '../component/pages/Servicios'
import Scratch from '../component/pages/Scratch'
import Appinventor from '../component/pages/Appinventor'
import Tutoriales from '../component/pages/Tutoriales'
import Aprendejugando from '../component/pages/Aprendejugando'
import Descargable from '../component/pages/Descargable'
import Preguntas from '../component/pages/preguntas'
import Team from '../component/pages/Team'
import PrivateRoute from '../auth/privateroute';
import Empleados from '../crud/';

import { Route} from 'react-router-dom'






export default function AppRouter(){
    return (

        
     <Router>
     
    <Route exact path="/" component={Inicio}/>
    <Route exact path="/blog" component={Blog}/>
    <Route exact path="/nosotros" component={Nosotros}/>
    <Route exact path="/scract" component={Scratch}/>
    <Route exact path="/appinventor" component={Appinventor}/>
    <Route exact path="/servicios" component={Servicios}/>
    <Route exact path="/tutoriales" component={Tutoriales}/>
    <Route exact path="/aprendejugando" component={Aprendejugando}/>
    <Route exact path="/snap" component={Snap}/>
    <Route exact path="/registro" component={Registro}/>
    <Route exact path="/politicas" component={Politicas}/>
    <Route exact path="/team" component={Team}/>
    <Route exact path="/scratch" component={Scratch}/>
    <Route exact path="/login" component={login}/>
    <Route exact path="/preguntas" component={Preguntas}/>
    
    

        <Switch>
        
            {/* <Route exact path={["/", "/login","/nosotros","/Appinventor","/Scratch","/Snap","/Aprendejugando","/Descargable","/Tutoriales","/Servicios","/Appinventor","/Registro","/Blog"]} */}
            {/* <Route patch="/" component ={Inicio}/>
            <Route path='/blog' element={<Blog/>} />
            <Route patch='/nosotros' component ={<Nosotros/>}/> */}
          {/*    component={login,Nosotros}/> */}
            
           
            
            <PrivateRoute exact path="/empleados" component={Empleados} />
            <PrivateRoute exact path="/descargable" component={Descargable} />
            
            <Route
                path={'*'}
                element={() =>(
                    <h2 style={{ marginTop:200 }}>
                        404
                        <br />
                        PAGINA NO ENCONTRADA
                    </h2>
                )}
                />
            </Switch>
            
        </Router> 
       
       
       
    );
}