/*
El patrón observer se compone de un sujeto que ofrece mecanismos de suscripción y
desuscripción a múltiples observadores que quieren ser notificados de los cambios en dicho sujeto.

Cada observador expone un método de update que es usado por el sujeto para notificar cualquier
cambio a todos los suscritos.

Es uno de los patrones más utilizados, algunos ejemplos típicos son:

Newsletter
Sockets
Listeners en páginas web
*/

interface Observer {
    update: (data: any) => void;
}

interface Subject {
    subscribe: (observer: Observer) => void;
    unsubscribe: (observer: Observer) => void;
}

class BitCoinPrice implements Subject {
    observers: Observer[] = [];

    constructor() {
        const el = document.querySelector('#value');
        el.addEventListener('input', () => {
            this.notify(el.value);
        });
    }

    subscribe(observer: Observer) {
       this.observers.push(observer);
    }

    unsubscribe (observer: Observer) {
        const index = this.observers.findIndex(obs => obs === observer);
        this.observers.splice(index, 1);
    }

    notify(data: any) {
        this.observers.forEach(observer => observer.update(data))
    }
}