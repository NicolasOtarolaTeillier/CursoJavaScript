'use strict'
// utilizando un bucle, mostrar la suma y la media de los numeros
//instroducidos hasta que sea un nuemero negativo, desplegar resultados


var suma = 0;
var contador = 0;
var media = 0;
var numero = parseInt(prompt("Ingrese un numero",0));

while(numero>=0){
    if(isNaN(numero)){
        numero=0;
    }
    suma = suma + numero;
    contador = contador + 1;
    numero = parseInt(prompt("Ingrese un numero",0));
}
if(contador != 0){
    media = suma/contador;
}

alert("la suma total es "+suma);
alert("su media es "+media);

