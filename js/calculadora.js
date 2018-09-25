function calcular() {
	var ajaxRequest;
	var mensaje = document.getElementById("mensaje"); 

	if(window.XMLHttpRequest){
		ajaxRequest = new XMLHttpRequest();
	} else{
		ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}

	var operador1 = document.getElementById("operador1").value; 
	var operador2 = document.getElementById("operador2").value;
	var operacion = document.getElementById("operacion").value;
	var operaciones = "operador1=" + operador1 + "&operador2=" + operador2 + "&operacion=" + operacion;

	ajaxRequest.onreadystatechange = function() {
    if (ajaxRequest.readyState === 4 && ajaxRequest.status === 200) {
    	var resultado = ajaxRequest.responseText;
    	mensaje.innerHTML = resultado;
    }
  };
  ajaxRequest.open("POST", "calculadora.php", true);
  ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  ajaxRequest.send(operaciones);
}