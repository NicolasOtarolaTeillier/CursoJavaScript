'use strict'
var categorias=["Accion","Terror","Comedio"];   // accion terror    comedia   (undefined)
var peliculas=["ET","Superman","dbz","Batman"]; // et     superman  dbz       peliculas
var cine =[categorias,peliculas]

 console.log(cine[0][3])
var elemento =""
/*
do{
    elemento = prompt("Introduce tu pelicula: ");
    peliculas.push(elemento);

}while(elemento != "ACABAR");
peliculas[0]=undefined;
peliculas.pop();
console.log(peliculas);
console.log(peliculas.length);
*/

var indice = cine[1].indexOf("dbz");

if (indice > -1){
    peliculas.splice(indice,1);    
    //vcategorias.splice(0,1);   
}

var peliculas_str= peliculas.join();  // convierte un arreglo en un string separado por comas
var peli_texto= "Accion,Terror,Comedio,ET,Superman,Batman";
var pel= peli_texto.split(",")

peliculas.sort(); // ordena segun ascii
peliculas.reverse();
console.log(peliculas);  //// ojo si se elimina de peliculas con splice o pop tambien se elimina de cine, "es como una vista"
