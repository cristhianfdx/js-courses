class Singleton {

    private static instance: Singleton;

    private constructor() {}

    static getInstance() {
        if (Singleton.instance){
            this.instance = new Singleton();
        }
        return this.instance;
    }
}

const a = Singleton.getInstance();
const b = Singleton.getInstance();
console.log(a === b);