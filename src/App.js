import Bootstrap from './node_modules/bootstrap';
import Pet from './Pet';

class App {
    constructor() {
        this.initialize();
    }

    initialize() {
        Bootstrap.InitializeCrud().then(() => {
            const pet = new Pet();
        });
    }
}

new App();