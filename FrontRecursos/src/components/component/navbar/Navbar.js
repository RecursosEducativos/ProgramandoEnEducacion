import React from 'react'
import { Link } from 'react-router-dom'




export default function Navbar() {
    return (  
   <div className="App-header"> 
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
 
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="./imagenes/logo.jpg" width="130" height="130"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav" mx-left>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Inicio&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        </li>
               <li className="nav-item">
          <Link className="nav-link" to="/Nosotros">Nosotros&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Servicios
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="nav-link" to="/servicios">NosotrosSeminarios</Link></li>
            <li><Link className="nav-link" to="/servicios">Desarrollo de App</Link></li>
            <li><Link className="nav-link" to="/servicios">Proyectos Educativos</Link></li>
          </ul>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          <Link className="nav-link" to="/Registro">Registro&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        </li><img src="./imagenes/login.png" width="50" height="50"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </ul>
    </div>
  </div>

</nav>
      </div>
    )
}
