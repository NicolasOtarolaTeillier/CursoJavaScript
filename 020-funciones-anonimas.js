'use strict'


function sumame(num1,num2,sumaXdos,sumaXtres){
    var suma = num1+num2;
    sumaXdos(suma*2);
    sumaXtres(suma*3);
    return suma;
}
console.log(sumame(2,3,
    function(dato){
        console.log("la suma por 2 es "+dato);
    },
    dato =>{                                        // Funciones de callback
        console.log("la suma por 3 es "+dato);
    }
)); 