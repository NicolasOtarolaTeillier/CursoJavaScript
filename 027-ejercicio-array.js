'use strict'                

var numeros=[];
var n=3//prompt("cuantos elementos quieres ingresar");

function mostrarArray(array,tipo=""){
    switch(tipo){
        case "":
            break;
        case "a":
            array.sort((a, b) => a - b);
            break;
        case "d":
            array.sort((a, b) => b - a);
            break;
        default:
            break;
        
    }

    array.forEach(element => {
        document.write(element+"</br>");
        
    });
}
function buscarEnArray(array,x){
    var b = array.findIndex(elemento => elemento == x);
    if (b>-1){
        console.log("si se encuentra, y esta en la posicion "+b);
    };
    


};

for(var i= 0; i < n ;i++){
    numeros.push(prompt("Ingresa el numero: " + (i+1)));
}

//mostrarArray(numeros,"a");
mostrarArray(numeros);

var x = prompt("Ingrese numero a buscar: ");
buscarEnArray(numeros,x);
//console.log(numeros);







