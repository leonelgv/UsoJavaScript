/*=============================================
CONDICIONES
=============================================*/
var a = 5;
var b = 10;

if(a > b){
	console.log("a es mayor que b")
}else if(a == b){
	console.log("a es lo mismo que b")
}else{
	console.log("a no es lo mismo que b, y a es menor que b")
}

/*=============================================
CAMBIOS
=============================================*/
var dia ="domingo";

switch(dia){

	case "sabado":
	console.log("voy a estudiar asp y jsp");
	break;

	case "martes":
	console.log("voy a estudiar css");
	break;

	case "jueves":
	console.log("voy a estudiar html");
	break;

	case "domingo":
	console.log("voy a descansar");
	break;

	default: console.log("voy a estudiar javascript");

}

/*=============================================
CICLO FOR
=============================================*/

var cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);

for(var i = 0; i < cajas.length; i++){
	cajas[i].style.width = "50px";
	cajas[i].style.height = "50px";
	cajas[i].style.background = "brown";
	cajas[i].style.marginTop = "5px";
	cajas[i].style.marginRight = "5px";
	cajas[i].style.display = "inline-block";
}

for(var i = 1; i <= 5; i++){    
    console.log("i", i);
}

/*=============================================
CICLO WHILE
=============================================*/
var n = 1;

while(n <= 5){
	console.log("n", n);
	n++;	
}

/*=============================================
CICLO DO WHILE
=============================================*/

var p = 1;

do{
	console.log("p", p);
	p++;
}

while(p <= 5);














