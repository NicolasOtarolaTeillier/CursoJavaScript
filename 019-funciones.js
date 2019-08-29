'use strict'
function porConsola(numero1,numero2){
        console.log("soy la calculadora");
        console.log("suma : "+numero1+" + "+numero2+" = "+(numero1+numero2));
        console.log("resta : "+numero1+" - "+numero2+" = "+(numero1-numero2));
        console.log("divicion : "+numero1+" / "+numero2+" = "+(numero1/numero2));
        console.log("multiplicacion : "+numero1+" x "+numero2+" = "+(numero1*numero2)); 
}
function porDocumento(numero1,numero2){
    document.write("soy la calculadora"+"<br/>");
    document.write("suma : "+numero1+" + "+numero2+" = "+(numero1+numero2)+"<br/>");
    document.write("resta : "+numero1+" - "+numero2+" = "+(numero1-numero2)+"<br/>");
    document.write("divicion : "+numero1+" / "+numero2+" = "+(numero1/numero2)+"<br/>");
    document.write("multiplicacion : "+numero1+" x "+numero2+" = "+(numero1*numero2)+"<br/>"); 
}


function calculadora(numero1,numero2, mostrar = false){
    if(!mostrar){
        porConsola(numero1,numero2);
    }
    else{
        porDocumento(numero1,numero2);
    }
    
}
calculadora(2,7,true);
calculadora(2,7);