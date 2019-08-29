'use strict'

var numero1;
var numero2;
do{
    numero1 = parseInt(prompt("Ingrese numero ",0));
    numero2 = parseInt(prompt("Ingrese numero ",0));
}while(isNaN(numero1)||isNaN(numero2)||!(numero2>0)||!(numero1>0));

//pagina 
document.write(numero1+" + "+numero2+" = "+(numero1+numero2)+"<br/>");
document.write(numero1+" - "+numero2+" = "+(numero1-numero2)+"<br/>");
document.write(numero1+" / "+numero2+" = "+(numero1/numero2)+"<br/>");
document.write(numero1+" x "+numero2+" = "+(numero1*numero2)+"<br/>");

//consola

console.log(numero1+" + "+numero2+" = "+(numero1+numero2));
console.log(numero1+" - "+numero2+" = "+(numero1-numero2));
console.log(numero1+" / "+numero2+" = "+(numero1/numero2));
console.log(numero1+" x "+numero2+" = "+(numero1*numero2));

//alerta
alert(numero1+" + "+numero2+" = "+(numero1+numero2));
alert(numero1+" - "+numero2+" = "+(numero1-numero2));
alert(numero1+" / "+numero2+" = "+(numero1/numero2));
alert(numero1+" x "+numero2+" = "+(numero1*numero2));


