import React from 'react'

export default function Footer() {
    return (
        
        <div>
        <footer className="footer">
        <img src="./imagenes/barra.png" />
        <br/>
        <table border="0" width="100%" id="table1">
	<tr>
		<td colspan="2">
   
		<p align="center">&nbsp;&nbsp;<label className="label">&nbsp;&nbsp;CONTACTENOS&nbsp;&nbsp;</label></p></td>
		<td width="24%">
		<p align="center"><label className="label">&nbsp;&nbsp;POLÍTICAS&nbsp;&nbsp;</label></p></td>
		<td width="24%">
		<p align="center"><input   type="button" value="DESCARGAS" name="B5"/></p></td>
		<td width="24%">
        <p align="center"><label className="label">&nbsp;&nbsp;TEAM&nbsp;&nbsp;</label></p></td>
    </tr>
	<tr>
        <p align="left">
		<td width="6%" valign="bottom">&nbsp;
		<a href="https://api.whatsapp.com/send?phone=0573134058789">
		<img src="./imagenes/iconwhassap.jpg" width="60" height="60"/>
		</a>
		</td></p>
		<td width="18%">&nbsp;<b>+573134058789</b></td>
		<td width="24%">&nbsp;<b><a href="/politicas">Políticas de privacidad</a></b></td>
		<td width="24%" align="center">
		<a href="https://www.scratchjr.org/">
		<img src="./imagenes/iconscratch.jpg" width="150" height="80"/>
		</a>
		</td>
		<td width="24%"><p align="center"><img src="./imagenes/logo.jpg" width="120" height="120"/></p></td>
	</tr>
	<tr>
        <p align="left">
		<td width="6%" >&nbsp;
		<a href="https://www.facebook.com/Recursos-Educativos-108733314322889">
			<img src="./imagenes/iconmeta.jpg" width="80" height="60"/>
		</a>
		</td></p>
		<td width="18%">&nbsp;<b>Facebook</b></td>
		<td width="24%">&nbsp;<b><a href="/preguntas">Preguntas Frecuentes</a></b></td>
		<td width="24%" align="center">&nbsp;
		<a href="https://snap.berkeley.edu/">
			<img src="./imagenes/iconsnap.jpg" width="150" height="80"/>
		</a>
		
		</td>
		<td width="24%">&nbsp;<a href="team"><img src="./imagenes/team.svg" width="40" height="40"/></a><b>&nbsp;&nbsp;Equipo de desarrollo</b></td>
	</tr>
	<tr>
        <p align="left">
        <td width="6%">&nbsp;
		<a href="https://www.instagram.com/recursoeducativo/"><img src="./imagenes/iconinstagram.jpg" width="80" height="60"/>
		</a>
		</td></p>
		<td width="18%">&nbsp;<b>Instagram</b></td>
		<td width="24%">&nbsp;</td>
		<td width="24%" align="center">&nbsp;
		<a href="https://appinventor.mit.edu/">
			<img src="./imagenes/iconappinventor.jpg" width="150" height="80"/>
		</a>
		</td>
		<td width="24%">&nbsp;</td>
	</tr>
	<tr>
        <p align="center">
		<td width="6%">&nbsp;
		<a href="https://www.youtube.com/channel/UC0xRLec5CFKBHyHIHxJ9COw"><img src="./imagenes/iconyoutube.jpg" 
		width="80" height="60"/>
		</a>
		</td></p>
		<td width="18%" font-size="18px">&nbsp;<b>Youtube</b></td>
		<td width="24%">&nbsp;</td>
		<td width="24%">&nbsp;</td>
		<td width="24%">&nbsp;</td>
	</tr>
</table>
</footer>
          
        </div> 
       
        
    )
}
