import mongoose from 'mongoose';
import {routeBuilder} from './utils/routes';

export default class Crud {
	constructor(model, options, {seed,seedData} = {}) {
		this.models = [];

		routeBuilder(options.routeName || `${this.constructor.name.toLowerCase()}s` , this);

		// setup mongoose collection
		console.info(`Setting up mongoose collection for ${options.routeName}...`);
		this.schema = new mongoose.Schema(model);

		if(this.onSave) {
			this.schema.post('save', doc => this.onSave(doc));
		}

		this.models.push({
			[this.constructor.name]: mongoose.model(this.constructor.name, this.schema)
		});

		if (seed && seedData.length > 0) {
			console.info(`Seeding ${this.constructor.name} db with seedData ...`);
			this.model.remove({}, () => {
				console.info(`All data from ${this.constructor.name} db removed.`);
				this.model.create(...seedData, (err) => {
					if (!err) {
						console.info(`${this.constructor.name} db successfully seeded.`);
					}
				});
			});
		}
	}

	get model() {
		const model = this.models.find(m => {
			return m[this.constructor.name];
		});

		return model[this.constructor.name];
	}
}