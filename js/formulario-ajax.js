function post_ajax() {
	var ajaxRequest;
	var mensaje = document.getElementById("mensaje"); 

	if(window.XMLHttpRequest){
		ajaxRequest = new XMLHttpRequest();
	} else{
		ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}

	var nombre = document.getElementById("nombre").value; 
	var apellido = document.getElementById("apellido").value; 
	var informacionUsuario = "nombre=" + nombre + "&apellido=" + apellido;

	ajaxRequest.onreadystatechange = function() {
    if (ajaxRequest.readyState === 4 && ajaxRequest.status === 200) {
    	var resultado = ajaxRequest.responseText;
    	mensaje.innerHTML = resultado;
    }
  };
  ajaxRequest.open("POST", "archivo.php", true);
  ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  ajaxRequest.send(informacionUsuario);
}