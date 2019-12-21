/*
El proxy sirve para interceptar la lectura de propiedades de un objeto (los get, y set)
entre muchas otras funciones. Así, antes de que la llamada llegue al objeto podemos
manipularla con una lógica que nosotros definamos.
*/

const target = {
    red: 'Rojo',
    green: 'Verde',
    blue: 'Azul'
}

const handler = {
    get(obj, prop){
        if(prop in obj) return obj[prop];

        const suggestion = Object.keys(obj).find(key => {
            return Levenshtein.get(key, prop) <= 3;
        });

        if (suggestion) {
            console.log(`${prop} no se encuentra, quisiste decir ${suggestion}?`);
        }

        return obj[prop];
    }
}

const p = new Proxy(target, handler);