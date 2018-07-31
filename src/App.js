import Bootstrap from './lib/bootstrap';
import {Pet, Thing} from './Models';
class App {
    constructor() {
        this.initialize();
    }

    initialize() {
        Bootstrap.InitializeCrud([Pet, Thing], {
            port: 3000
        }).then(() => {
            // const pet = new Pet();
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