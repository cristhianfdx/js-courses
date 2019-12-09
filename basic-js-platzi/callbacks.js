const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const OPTIONS = {crossDomain: true};

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $
        .get(url, OPTIONS, callback)
        .fail(function(){
            console.error(`Sucedio un error. No se pudo obtener el personaje ${id}`);
    });
}

obtenerPersonaje(1, function(persona){
    console.log(`Hola, yo soy ${persona.name}`);
    obtenerPersonaje(2, function(persona){
        console.log(`Hola, yo soy ${persona.name}`);
        obtenerPersonaje(3, function(persona){
            console.log(`Hola, yo soy ${persona.name}`);
            obtenerPersonaje(4, function(persona){
                console.log(`Hola, yo soy ${persona.name}`);
                obtenerPersonaje(5, function(persona){
                    console.log(`Hola, yo soy ${persona.name}`);
                    obtenerPersonaje(6, function(persona){
                        console.log(`Hola, yo soy ${persona.name}`);
                        obtenerPersonaje(7, function(persona){
                            console.log(`Hola, yo soy ${persona.name}`);
                        });
                    });
                });
            });
        });
    });
});