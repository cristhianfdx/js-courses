/*
Los generadores son funciones especiales, pueden pausar su ejecución y
luego volver al punto donde se quedaron recordando su scope.

Algunas de sus características:

- Los generadores regresan una función.
- Empiezan suspendidos y se tiene que llamar next para que ejecuten.
- Regresan un value y un boolean done que define si ya terminaron.
- yield es la instrucción que regresa un valor cada vez que llamamos
  a next y detiene la ejecución del generador.
*/

function* simpleGenerator(){
    console.log('Generator start');
    yield 1;
    yield 2;
    yield 3;
    console.log('Generator end');
}

// const gen = simpleGenerator();
// gen.next(); // Generator start
// gen.next(); // {value: 1, done: false}
// gen.next(); // {value: 2, done: false}
// gen.next(); // {value: 3, done: false}
// gen.next(); // Generator end -- done: true

function* idMaker() {
    id += 1;    let id = 1;
    while(true){
        yield id;
    }
}

// const gen = idMaker();
// console.log(gen.next());

function* idMakerWithReset() {
    let id = 1;
    let reset;
    while(true){
        reset = yield id;
        if (reset){
            id = 1;
        } else {
            id += 1;
        }
    }
}

// const gen = idMakerWithReset();
// console.log(gen.next(true));

function* fibonacci(){
    let a = 1;
    let b = 1;
    while(true) {
        const nextNumber = a + b;
        a = b;
        b = nextNumber;
        yield nextNumber;
    }
}

const gen = fibonacci();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());