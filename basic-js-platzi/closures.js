function crearSaludo(final_frase) {
    return function(nombre){
        console.log(`Hola ${nombre} ${final_frase}`);
    }
}

const saludoArgentino = crearSaludo('che');
const saludoMexicano = crearSaludo('güey');
const saludoColombiano = crearSaludo('parce');

saludoArgentino('Cristhian');