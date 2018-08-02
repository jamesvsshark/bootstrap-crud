import Crud from '../lib/Crud';
import { Schema } from 'mongoose';

export default class Pet extends Crud {
	constructor() {
		const model = {
			name: String,
			breed: String,
			age: Number,
			owner: {type: Schema.Types.ObjectId, ref: 'Person'}
		};

		super(model, {
			routeName: 'pets'
		}, {
			seed: false,
			seedData: [{
				name: 'Cleo',
				breed: 'Ruler',
				age: 2
			}, {
				name: 'Max',
				breed: 'Pupper',
				age: 7
			}]
		});
	}

	onSave(pet) {
		// send a welcome email to pet
		console.info('Pet added: ', pet);
	}
}