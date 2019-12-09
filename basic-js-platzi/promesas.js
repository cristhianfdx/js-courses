const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const OPTIONS = {crossDomain: true};

function obtenerPersonaje(id){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $
        .get(url, OPTIONS, function(data){
            resolve(data);
        })
        .fail(()=> reject(id));
    });
}

function onError(id){
    console.log(`No se pudo obtener el personaje ${id}`);
}

let ids = [1, 2, 3, 4, 5, 6, 7];

let promesas = ids.map(id => obtenerPersonaje(id));

Promise
    .all(promesas)
    .then(personajes => {
        personajes.forEach((personaje, index) => console.log(`El personaje ${index+1} es ${personaje.name}`));
    })
    .catch(onError);

/*
obtenerPersonaje(1)
    .then(personaje => {
        console.log(`El personaje 1 es ${personaje.name}`);
        return obtenerPersonaje(2);
    })
    .then(personaje => {
        console.log(`El personaje 2 es ${personaje.name}`);
        return obtenerPersonaje(3);
    })
    .then(personaje => {
        console.log(`El personaje 3 es ${personaje.name}`);
        return obtenerPersonaje(4);
    })
    .then(personaje => {
        console.log(`El personaje 4 es ${personaje.name}`);
    })
    .catch(id => console.log(`No se pudo obtener el personaje ${id}`));
*/