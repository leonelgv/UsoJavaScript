/*=============================================
The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.
=============================================*/

var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var x = document.getElementById("prueba");
x.innerHTML = "Ancho de la ventana interior del navegador: " + w + ", altura: " + h + ".";

/*=============================================
Window Screen Width
La propiedad screen.width devuelve el ancho de la pantalla del visitante en píxeles
=============================================*/

document.getElementById("prueba2").innerHTML = "El ancho de la pantalla es " + screen.width;

/*=============================================	
Window Screen Width
La propiedad screen.height devuelve la altura de la pantalla del visitante en píxeles
=============================================*/

document.getElementById("prueba3").innerHTML = "El alto de la pantalla es " + screen.height;

/*=============================================
Window Screen Available Width
La propiedad screen.availWidth devuelve el ancho de la pantalla del visitante, en píxeles, menos las características de la interfaz como la barra de tareas de Windows.
=============================================*/

document.getElementById("prueba4").innerHTML =
"Ancho de pantalla disponible: " + screen.availWidth;

/*=============================================
Window Screen Available Height
La propiedad screen.availWidth devuelve el alto de la pantalla del visitante, en píxeles, menos las características de la interfaz como la barra de tareas de Windows.
=============================================*/	

document.getElementById("prueba5").innerHTML =
"Alto de pantalla disponible: " + screen.availHeight;

/*=============================================
Window Screen Color Depth
La propiedad screen.colorDepth devuelve el número de bits utilizados para mostrar un color.
=============================================*/

document.getElementById("prueba6").innerHTML = 
"Profundidad de color de la pantalla: " + screen.colorDepth;


/*=============================================
Window Screen Pixel Depth
La propiedad screen.pixelDepth devuelve la profundidad de píxel de la pantalla.
=============================================*/

document.getElementById("prueba7").innerHTML =
"Profundidad del píxel de la pantalla: " + screen.pixelDepth;


document.getElementById("prueba8").innerHTML =
"Page path is " + window.location.pathname;

















