'use strict'
//document.write("<script type='text/javascript' src='026-arreglos-multi.js'> </script>");

function cambiarColor(color){
    caja.style.background = color;
};

//var caja = document.getElementById("miCaja");
var caja = document.querySelector("#miCaja");
//var caja2 = document.getElementById("miCaja2");


caja.innerHTML=caja.innerHTML+", texto en la caja desde js";
//caja2.innerText=caja2.innerText+", texto en la caja desde js";
//caja.style.background = "red";
//cambiarColor("yellow");
caja.className="hola2";


h