'use strict'

var numero;
do{
    numero = parseInt(prompt("Ingrese numero ",0));
}while(isNaN(numero));

if(numero%2==0){
    document.write("numero par :"+numero);
}
else{
    document.write("numero impar:"+numero);
}
