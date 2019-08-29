'use strict'

var numero1 = parseInt(prompt("ingrese numero desde",0));
var numero2 = parseInt(prompt("ingrese numero hasta",10));
document.write("<h1>de "+numero1+" a "+ numero2+ "estan estos numeros: </h1>")
if (numero1 <= numero2){
    
    for(var i= numero1; i<= numero2 ;i++){
        if(i%2!=0){
            console.log(i);
            document.write(i + "<br/>");  
        }
        
    }
}
else {
    for(var i= numero1; i>= numero2 ;i--){
        if(i%2!=0){
            console.log(i);
            document.write(i + "<br/>");  
        }
    }
}
