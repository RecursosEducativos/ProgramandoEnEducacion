import React from 'react'
import {Table } from "react-bootstrap";

export default function aprendejugando() {
    return (
        <div text-aling="center">
        <body className="body">
        
        
            <h1>Aprende Jugando</h1>
            
            
            <div id="barra2"></div>
            
            
            <br/>
            <p>Comparte, juega e interactua con proyectos realizados por estudiantes y tutores en Scratch, 
            aquí te divertirás y desarrollaras habilidades jugando pero aprendiendo de una forma didactica 
            y significativa, podras descargar estos archivos para ser modificados y adaptados a tus requerimientos,
            sólo debes registrarte.</p>
            
            
            
            
            <h2>Proyecto Rompecabezas</h2>

            
            
            
            <p>Cuando usamos la espiral del conocimiento para desarrollar el pensamiento creativo aumentamos las 
            capacidades del individuo, en este proyecto trabajamos el pensamiento lógico, la noción espacial (Arriba,abajo),
            lateralidad (derecha e izquierda), el pensamiento matemático (abarcamos la temática de la decena) y la atención
            concentración, de esta manera se aprende jugando.
            </p>
            
            


          <div className="divCentrar">
            <iframe src="https://scratch.mit.edu/projects/552198057/embed" allowtransparency="true" 
            width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>

           <br/><br/>
            <h2>Proyecto Figurin</h2>

            
            
            
            <p>Este proyecto fue realizado a solicitud de un docente en el area de presecolar que
                tenía la necesidad de profundizar en la temática de las figuras geometricas y colores 
                primarios, esta aplicación permite que los estudiantes puedan interactuar de una
                manera divertida donde por medio del juego adquieren destreza es su razonamiento espacial
                al construir objetos de diferentes colores con una variedad de figuras.
                
            </p>
            
            


          <div className="divCentrar">
          <iframe src="https://scratch.mit.edu/projects/443298196/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>

            <br/>
            
            <h2>Proyecto Sotosudoku</h2>
            
            <p>
            
       
        SOTOSUDOKU es una aplicación Móvil basada en el juego matemático japonés Sudoku,
        fue creado para distraernos en cuarentena de una forma significativa, ya que al 
        jugar ejercitamos el cerebro, está orientado principalmente a los estudiantes 
        desarrollando su lógica matemática.</p>
        <div>
  <Table responsive="sm">
    
   
      <tr>
        <td> <img src="./imagenes/sotosudoku.jpg"  width="350px" height="550px"/></td>
        <td>
        <p>
        El juego está conformado por un tablero de 
        81 botones divididos en 3 conjuntos de 9 filas, 9 columnas y 9 bloques o casillas, 
        donde podemos elegir los números del 1 al 9. Posee dos botones de signo + y signo menos - 
        que aumenta o disminuye el número que inicializa en 5; un botón verificar que compara
        los ítem de cada conjunto y destaca los números repetidos en colores diferentes,
        el rojo para las casillas o bloques, el marrón para las columnas y el verde para
        las filas que te ayudara a resolver y entrenarte como un experto en solucionar sudokus.
        Sotosudoku posee 4 niveles de dificultad básico, intermedio, avanzado y pro y cada uno
        conformado por diferentes sudokus que van cambiando a medida que avanzas en el juego y
        te avisa cuando resuelves o cambias de nivel.</p>
        </td>
       
        
      </tr>
   
    
  </Table>
</div>
        <br/>

        Juega, diviértete, distráete y entrena tu cerebro con SOTOSUDOKU!
        <br/><a href="https://play.google.com/store/apps/details?id=io.kodular.todolibroltda.SOTOSUDOKU&hl=en_US&gl=US">Descargalo aquí</a>

        </body>
        </div>
    )
}
