//programa que pida 2 numeros y nos diga cual es el menor y si som iguales


var numero1 ;
var numero2 ;
console.log(numero1,numero2);

do{
    numero1 = parseInt(prompt("Ingrese numero 1",1));
    numero2 = parseInt(prompt("Ingrese numero 2",2));

}while(numero1<=0 || numero2<=0 || isNaN(numero1) || isNaN(numero2))

if(numero1<numero2){
    alert("El numero2 = "+numero2+" ,es mayor que el numero1 = "+numero1);
}
else if(numero2<numero1){
    alert("El numero1 = "+numero1+" ,es mayor que el numero2 = "+numero2);

}
else if(numero1==numero2){
     alert("son iguales");
}
else{
    alert("Ingrese numeros correctos");
}



