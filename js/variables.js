/*=================================
=            Variables            =
=================================*/

//Variables númericas
var numero = 5;
var x = document.getElementById("variable");
x.innerHTML = "Uso de una variable numerica : " + numero + ".";

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
/* El DOM es la estructura de objetos que genera el navegador cuando se carga un documento y se puede alterar mediante javascript para cambiar dinámicamente los contenidos y aspecto de la página */

var caja = document.querySelector("#caja");
console.log("caja: ", caja);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "red";

var cajita = document.querySelector("#cajita");
console.log("caja: ", cajita);

cajita.style.width = "100px";
cajita.style.height = "100px";
cajita.style.background = "blue";














/*=====  End of Variables  ======*/
