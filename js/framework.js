var col1 = document.getElementById("col1");
var col2 = document.getElementById("col2");
var col3 = document.getElementById("col3");
var link = document.getElementsByTagName("link");


var boton = document.querySelector("#boton");
var boton1 = document.querySelector("#boton1");

boton.addEventListener("click",cambiarCols);
boton1.addEventListener("click",cambiarColsNormal);
//link.outerHTML.link("css/foundation.min.css");

function cambiarCols(){

    //console.log("Link: ", link.entries());
	col1.className = "col s12 m12 l12";
    col2.className = "col s12 m12 l12";
    col3.className = "col s12 m12 l12";
}

function cambiarColsNormal(){
    col1.className = "col s12 m4 l3";
    col2.className = "col s12 m8 l6";
    col3.className = "col s12 m12 l3";
}