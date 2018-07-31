import Crud from '../lib/Crud';

export default class Thing extends Crud {
	constructor() {
		const model = {
			title: String,
			done: {
				type: Boolean,
				default: false
			}
		};

		super(model, {
			routeName: 'things'
		});
	}
}