//Strings
var nombre = 'Cristhian';
var apellido = 'Forero';

var nombreMayusculas = nombre.toUpperCase();
var nombreMinusculas = nombre.toLowerCase();
var primeraLetra = nombre.charAt(0);
var cantidadLetras = nombre.length;
var ultimaLetra = nombre.charAt(nombre.length - 1);

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;

var str = nombre.substr(1, 2);
var str2 = nombre.split('');
var str3 = nombre.concat(apellido);

// Números

var edad = 27;
edad += 1; // edad = edad + 1;

var peso = 75;
peso -= 2; // peso = peso - 2;

var sandwich = 1;
peso += sandwich;

var precio = 200.3;
var total = Math.round(precio * 100 *3)/100;
var total1 = precio.toFixed(3);
var total3 = parseFloat(total1);


// Funciones

//imprimir('Hola mi nombre es ' + nombre);
//imprimir('Tengo '+ edad + ' años');

function imprimir(valor){
    console.log(valor);
}

var cristhian = {
    nombre: 'Cristhian',
    apellido: 'Forero',
    edad: 30
};

function cumpleanos(persona){
    return {
        ...persona,
        edad : persona.edad + 1
    }
}
