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

async function obtenerPersonajes() {
    let ids = [1, 2, 3, 4, 5, 6, 7];
    let promesas = ids.map(id => obtenerPersonaje(id));
    try {
        let personajes = await Promise.all(promesas);
        personajes.forEach((personaje, index) => console.log(`El personaje ${index+1} es ${personaje.name}`));

    } catch (id) {
        onError(id);
    }
}

obtenerPersonajes();