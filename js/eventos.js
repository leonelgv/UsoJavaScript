var recuadro = document.querySelector("#recuadro");

/*=============================================
EVENTOS DESDE EL DOM
=============================================*/

function cambiarColor(){
	recuadro.style.background = "red";
}

function estadoOriginal(){
	recuadro.style.width = "200px";
	recuadro.style.background = "green";
}

/*=============================================
EVENTOS DESDE JAVASCRIPT
=============================================*/
var boton = document.querySelector("#boton");

boton.addEventListener("click",moverCaja)

function moverCaja(){

	recuadro.style.width = "500px";
	recuadro.style.transition = "1s width ease";
}
var boton1 = document.querySelector("#boton1");

boton1.addEventListener("click",original)

function original(){
	recuadro.style.width = "200px";
	recuadro.style.background = "green";
}







