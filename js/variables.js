/*=================================
=            Variables            =
=================================*/

//Variables númericas
var numero = 5;
console.log("numero: ", numero);

//Variables de texto
var palabra = "palabras";
console.log("palabras: ", palabra);

//Variables boleanas
var boleana = true;
console.log("boleana: ", boleana);

//Variables de tipo Arreglo (Array)
var colores = ["rojo", "amarillo" , "azul"];
console.log("colores: ", colores[0]);

//variables de tipo objeto (object: propiedad y el valor)
var jugo = {"ingrediente1":"fresa",
			"ingrediente2":"mandarina",
			"ingrediente3":"platano"};
console.log("jugo: ", jugo.ingrediente1);

//Variables DOM ('Modelo de objetos del documento')
/* El DOM es la estructura de objetos que genera el navegador cuando se carga un documento y se pued alterar mediante javascript para cambiar dinámicamente los contenidos y aspecto de la página */

var caja = document.querySelector("#caja");
console.log("caja: ", caja);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "red";


var cajas = document.querySelectorAll(".cajas");
console.log("cajas: ", cajas)

/*=====  End of Variables  ======*/
