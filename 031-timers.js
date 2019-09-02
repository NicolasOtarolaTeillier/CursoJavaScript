'use strict'
window.addEventListener('load',()=>{

    setTimeout(()=>{
        var boton = document.querySelector("#boton");
        boton.style.height = '40px';
    },1000)
    
    function intervalo(){
        var tiempo = setInterval(()=>{
        console.log("Se ejecuta el bucle cada 3 segs");
        var encabezado = document.querySelector("h1");
        if (encabezado.style.fontSize =="50px") {
            encabezado.style.fontSize = "30px";        
        }
        else{
            encabezado.style.fontSize = "50px";
        }
        },3000);
        return tiempo;
    };
    
    var tiempo = intervalo();
    var stop = document.querySelector("#stop");
    stop.addEventListener("click",()=>{
        alert("Has detenido el intervalo ");
        clearInterval(tiempo);
    })
    
    var start = document.querySelector("#start");
    start.addEventListener("click",()=>{
        alert("Has detenido el intervalo ");
        tiempo= intervalo();
    })
})
