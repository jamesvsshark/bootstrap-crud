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
			// fire away!
		});
	}
}

new App();