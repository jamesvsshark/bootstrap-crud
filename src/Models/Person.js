import Crud from '../lib/Crud';
import { Schema } from 'mongoose';

export default class Person extends Crud {
	constructor() {
		const model = {
			name: String,
			metadata: [Schema.Types.Mixed]
		};

		super(model, {
			routeName: 'people'
		}, {
			seed: false,
			seedData: [{
				name: 'Johnny Appleseed',
				metadata: [{
					name: 'gender',
					value: 'male'
				}, {
					name: 'likesApples',
					value: true
				}]
			}]
		});
	}
}