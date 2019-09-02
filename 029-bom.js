'use strict'


// BOM - browser Objetct Model
function getBom(){
    console.log(window.innerHeight); // tamaño de la ventana actual
    console.log(window.innerWidth);
    //console.log(screen.height); // toda la pantalla
    //console.log(screen.width);
    console.log(window.location);
}
getBom();

function redirect(url){
    window.location.href= url;
}

function abrirVentana(url){
    window.open(url,"","width=400.height=200");
};