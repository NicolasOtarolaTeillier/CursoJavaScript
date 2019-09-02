'use strict'

//arreglos, array, matrices
var nombre="Felipe Saldias";
var nombres= ["Nicolas Otarola","Felipe Saldias", "Daniela Fabrega",0 ,true];

var lenguajes = new Array("RUBY","PHP","JAVA", "C++","JS");

//console.log(lenguajes.length) //largo

//RECORRER ARREGLOS

// FOR NORMAL
/*
document.write("<ul>");
for (var i=0;i< lenguajes.length;i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");
*/

//. forEach Funciona con una funcion de callback con maximo 3 parametros para referenciar al elemento, indice y el arreglo completo en caso de necesitar
/*
lenguajes.forEach((elemento,index,arr) => {
    document.write("<li>"+index+" - "+elemento+"</li>");
    document.write(arr);
});
*/

// FOR IN
for(let indice in lenguajes){
    document.write("<li>"+lenguajes[indice]+"</li>");
}

/*
var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje=="PHP";
})*/
//var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
//var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");

var precios = [10,30,180,500,60,70];
var busqueda= precios.some(precio => precio >=70);
precios.sort


// metodo para ordenar arreglo de enteros 
/*
precios.sort();
console.log(precios);
precios.sort((a, b) => a - b); // For ascending sort
console.log(precios);
precios.sort((a, b) => b - a); // For descending sort
console.log(precios);
*/

console.log(busqueda);

