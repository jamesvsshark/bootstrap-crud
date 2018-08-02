import Bootstrap from './lib/bootstrap';
import {Pet, Thing, Person} from './Models';

class App {
	constructor() {
		this.initialize();
	}

	initialize() {
		Bootstrap.InitializeCrud([Pet, Thing, Person], {
			port: 3000
		}).then(() => {
			// fire away!
		});
	}
}

new App();