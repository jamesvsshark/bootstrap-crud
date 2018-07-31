import Bootstrap from './lib/bootstrap';
import Pet from './Pet';

class App {
    constructor() {
        this.initialize();
    }

    initialize() {
        Bootstrap.InitializeCrud().then(() => {
            const pet = new Pet();
            // sample data
            // pet.model.create({
            //     name: "TED",
            //     breed: "CAT",
            //     age: 4
            // })
        });
    }
}

new App();