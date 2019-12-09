const cristhian = {
    nombre: 'Cristhian',
    apellido: 'Forero'
}

function saludar(saludo = 'Hola'){
    console.log(`${saludo} mi nombre es ${this.nombre}`);
}

// bind retorna una nueva funcion, recibe como parametro el contexto
//const saludarCristhian = saludar.bind(cristhian, 'Hola parce');

//call ejecuta inmediatamente la funcion
//saludar.call(cristhian, 'Hola parce');

//apply recibe varios parametros para la función
//saludar.apply(cristhian, ['Hola parce']);