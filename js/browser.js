window.onload = function(){

    var imagen = document.getElementById("imagen");
    var enlace = document.getElementById("enlace");
    var browser = navigator.userAgent;

    // Regex - Expresiones regulares

    var n = browser.search("Firefox");
    var c = browser.search("Chrome");
    var s = browser.search("Safari");

    console.log("Expresion: ", n);
    console.log("Expresion: ", c);
    console.log("Expresion: ", s);
    console.log(n > 1);
    console.log(c > 1);
    console.log(s > 1);
    if (n > 1){
        document.getElementById("titulo").innerHTML =
            "Bienvenido usuario de Firefox";
        imagen.src = "img/firefox.png";
        imagen.style.width = "100px";
        imagen.style.height = "100px";
        enlace.href = "http://www.mozilla.org/";
        console.log("imagen: ", imagen);
    }
    if (c > 1){
        document.getElementById("titulo").innerHTML =
            "Bienvenido usuario de Chrome";
        imagen.src = "img/chrome.png";
        imagen.style.width = "100px";
        imagen.style.height = "100px";
        enlace.href = "http://www.google.com/";
        console.log("imagen: ", imagen);
        console.log("Enlace: ", enlace);
    }
    if (s > 1 && c < 1){
        document.getElementById("titulo").innerHTML =
            "Bienvenido usuario de Safari";
        imagen.src = "img/safari.png";
        imagen.style.width = "100px";
        imagen.style.height = "100px";
        enlace.href = "http://www.apple.com.mx/";
        console.log("imagen: ", imagen);
    }
    console.log("imagen: ", imagen);
    console.log("Browser: ", browser);
}