'use strict'

//parametros REST y SPRED

function listadoFrutas(fruta1,fruta2, ...resto_de_frutas){ // rest, recepcionar cantidad indefinida de parametros en un arreglo
    console.log("Fruta 1: "+fruta1);
    console.log("Fruta 2: "+fruta2);
    console.log("Frutas Extras: "+resto_de_frutas);
}
var canasta = ["Naranja","Manzana","Sandia"];
//listadoFrutas("Naranja","Manzana","Sandia","Pera","Melon","Coco","Uva");
//listadoFrutas(...canasta,"Pera","Melon","Coco","Uva") //spred separa en varios elementos los elementos de un arreglo

listadoFrutas(canasta,"Pera","Melon","Coco","Uva")