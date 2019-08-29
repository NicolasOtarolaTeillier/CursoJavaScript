'use strict'

var numero;
do{
    numero = parseInt(prompt("Ingrese numero ",0));
}while(isNaN(numero));

for(var i=0 ;i<=10;i++){
    document.write(i+" x "+numero+" = "+numero*i+"<br/>");
}
