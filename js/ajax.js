function ejemploAJAX() {
  	
  	/*
	0	Petición no ha sido inicializada
	1	Petición ha sido establecida
	2	Petición ha sido enviada
	3	Petición esta siendo procesada
	4	Petición ha sido finalizada
  */
  	var ajaxRequest;

	if(window.XMLHttpRequest){
		ajaxRequest = new XMLHttpRequest();
	} else{
		ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
  
  	ajaxRequest.onreadystatechange = function() {
    if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200) {
    	document.getElementById("text").innerHTML = ajaxRequest.responseText;
    }
  };
  ajaxRequest.open("GET", "documento.txt", true);
  ajaxRequest.send();
}

function leerJSON(){

	var ajaxRequest;

	if(window.XMLHttpRequest){
		ajaxRequest = new XMLHttpRequest();
	} else{
		ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var datos = document.getElementById("json");

	ajaxRequest.onreadystatechange = function() {
    if (ajaxRequest.readyState === 4 && ajaxRequest.status === 200) {
    	var datosJSON = JSON.parse(ajaxRequest.responseText);
    	console.log(ajaxRequest.responseText);
    	console.log(datosJSON);
    	if(datos.innerHTML === ""){
    		for (var i in datosJSON){
    			//console.log(datosJSON[i]);
    			datos.innerHTML += i + ": " + datosJSON[i] + "<br />";
    		}
    	}
    	
    }
  };
  ajaxRequest.open("GET", "datos.json", true);
  ajaxRequest.send();
}