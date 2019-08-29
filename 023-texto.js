 'use strict'

 //Transformacion de textos
 var numero = 444;
 var texto1 = "Bienvenido al curso"
 var texto2 = ", es un muy buen curso"


 var dato = numero.toString();
     dato = texto1.toUpperCase();
     dato = texto2.toLowerCase();

console.log(dato);

//calcular longitud
var nombre = "Nicolas Otárola";
    nombre = ["asdasdasd","lkgflkg","itritorit"];
console.log(nombre.length);


// concatenacion

console.log(texto1+texto2);
console.log(texto1.concat(texto2));


//busqueda en un texto
var busqueda;
//busqueda = texto1.indexOf("curso");console.log(busqueda);
//busqueda = texto1.lastIndexOf("curso");console.log(busqueda);
busqueda = (texto1+texto2).match("curso");console.log(busqueda);
//busqueda = texto1.match(/curso/g); console.log(busqueda);//para pillarlos todos
//busqueda = texto1.search("curso");console.log(busqueda); // lo mismo que indexOf
//busqueda = texto1.substr(14,5);console.log(busqueda);
//busqueda = texto1.charAt(14);console.log(busqueda);
//busqueda = texto1.startsWith("curso",14);console.log(busqueda);
//busqueda = texto1.endsWith("curso");console.log(busqueda);
//busqueda = texto1.includes("curso");console.log(busqueda);
   
////////////////////////FUNCIONES DE REEMPLAZO/////////////////////
texto1.replace("curso", "video curso");
texto1.slice(4, 10);
texto1.trim();
texto1.split(" ");
    


