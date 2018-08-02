import Crud from '../lib/Crud';

export default class Pet extends Crud {
	constructor() {
		const model = {
			name: String,
			breed: String,
			age: Number
		};

		super(model, {
			routeName: 'pets'
		}, {
			seed: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
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