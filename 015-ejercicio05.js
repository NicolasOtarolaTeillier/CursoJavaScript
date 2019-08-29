'use strict'

var dividendo = parseInt(prompt("ingrese numero divisor",0));

for(var i = 1; i<= dividendo; i++){
    if(dividendo%i == 0){
        document.write(i+" es divisor del "+dividendo+"<br/>");
    }
}