'use strict'

window.addEventListener('load',()=>{
    var boton = document.querySelector("#boton");
    function cambiarColor(){
        var bg = boton.style.background;

        if(bg == "green"){
            boton.style.background = "red";
        }
        else boton.style.background = "green";

        return "se cambio de color";
    }

    // capturar eventos:
    
    // evento click'
    boton.addEventListener('click',()=>{cambiarColor()});

    //evento 'mouseover' (raton entrando)
    boton.addEventListener('mouseover',()=> boton.style.background ="#ccc");

    //evento 'mouseout' (raton saliendo)
    boton.addEventListener('mouseout',()=> boton.style.background = "green");

    // EVENTOS DE CAJA DE TEXTO

    var input= document.querySelector("#campo_nombre");
    //Focus
    input.addEventListener('focus',()=>{
        console.log("[Focus] Estas dentro de input");
    });

    //Blur
    input.addEventListener('blur',()=>{
        console.log("[Blur] Estas dentro de input");
    });

    //keyDown
    input.addEventListener('keydown',(event)=>{
        console.log("[Keydown] pulsando esta tecla",String.fromCharCode(event.keyCode));
    });

    //keyPressed
    input.addEventListener('keypress',(event)=>{
        console.log("[KeyPressed] tecla presionada",String.fromCharCode(event.keyCode));
    });

    //keyUp
    input.addEventListener('keyup',(event)=>{
        console.log("[KeyUp] tecla soltada",String.fromCharCode(event.keyCode));
    });
})
