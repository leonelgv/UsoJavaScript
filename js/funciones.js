/*=============================================
Funciones sin parámetros
=============================================*/

//Declaramos la función

function saludo(){
	//Tarea de la función
	console.log("hola");
}

//Ejecutamos la función

saludo();

/*=============================================
Funciones con parámetros
=============================================*/

//Declaramos la función
function operacion(digito1, digito2){
	var resultado = digito1 + digito2;
	console.log("resultado: ", resultado);
}


operacion(54, 71);
operacion(10, 5);

/*=============================================
Funciones con retorno sin parámetros
=============================================*/

function retorno1(){
	var numero = 5;
	return numero;
}

console.log(retorno1());

/*=============================================
Funciones con retorno con parámetros
=============================================*/

function retorno2(numero){
	return numero;
}

console.log(retorno2(78));