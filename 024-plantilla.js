'use strict' 
var nombre= prompt("ingresa tu nombre ql");
var apellido= prompt("ingresa tu apellido carbon");

var texto = `
<h1>Hola que tal</h1>
<h2>mi nombre es: ${nombre}</h2>
<h2>mi apellido es: ${apellido}</h2>
`;
document.write(texto);