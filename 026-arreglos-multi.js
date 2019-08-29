'use strict'
var categorias=["Accion","Terror","Comedio"];
var peliculas=["ET","Superman","dbz"];
var cine =[categorias,peliculas]

// console.log(cine[1][2])
var elemento =""

do{
    elemento = prompt("Introduce tu pelicula: ");
    peliculas.push(elemento);

}while(elemento != "ACABAR");
peliculas[0]=undefined;
peliculas.pop();
console.log(peliculas);
console.log(peliculas.length);

