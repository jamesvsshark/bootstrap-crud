import Crud from '../lib/Crud';
import { Schema } from 'mongoose';

export default class Thing extends Crud {
	constructor() {
		const model = {
			title: String,
			important: {
				type: Boolean,
				default: false
			},
			metadata: [Schema.Types.Mixed]
		};

		super(model, {
			routeName: 'things'
		});
	}
}