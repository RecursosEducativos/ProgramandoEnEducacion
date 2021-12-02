import React from 'react'

export default function snap() {
    /* const iframe ="https://snap.berkeley.edu/embed?project=Platform%20Potioneer&user=melvin.alex&showTitle=true&showAuthor=true&editButton=true&pauseButton=true" ; */
    return (
        <div>
            <body className="body">
            <h1 className="h1">SNAP</h1>
            <div id="barra1"></div>
            
            



            <p>Es un lenguaje de programación visual que busca la sencillez y facilidad a la hora de programar utilizando para ello la programación por bloques.</p>          
            
            <p>Snap está programado en JavaScript, razón por la cual se puede usar desde cualquier navegador (sea un ordenador o una Tablet) o plataforma (incluyendo las móviles).</p>

            <p>Este lenguaje no está diseñado exclusivamente para niños pero es una manera divertida de aprender las bases de la programación. Y este es uno de los aspectos que lo diferencian de Scratch, ya que Snap es más para niños de secundaria mientras que Scratch es para niños de primaria (a partir de los 7 años).</p>
            
            <h1 className="h1">Anímate y conoce un poco de Snap</h1>



            {/* <iframe src={iframe} allowtransparency="true" 
            width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe> */}
            <p align="center"><iframe src="https://snap.berkeley.edu/embed?project=VerbosGerundio&user=recursoseducativos&showTitle=true&showAuthor=true&editButton=true&pauseButton=true" allowtransparency="true" 
            width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe></p>
         
            <br/>   
            
            </body>
        </div>
    )
}


