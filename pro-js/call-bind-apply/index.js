const pablo = {
    name: 'Pablo',
    lastname: 'Rojas'
}

function walk(meters, direcction) {
    console.log(`${this.name} camina ${meters} metros hacia el ${direcction}`);
}

// Métodos que permiten asignar el this a una función

// Call: Realiza la llamada automáticamente a la función
// function.call(this, arg1, arg2, argn)
walk.call(pablo, 400, 'sur');

// Apply: Realiza la llamada automáticamente a la función, recibe los párametros en un array
// function.apply(this, [arg1, arg2, argn])
walk.apply(pablo, [500, 'Norte']);

/*
Bind: Recibe como primer y único argumento el this.
No ejecuta la función, sólo regresa otra función con el nuevo this integrado.
*/
const fn = walk.bind(pablo);
fn(400, 'este');