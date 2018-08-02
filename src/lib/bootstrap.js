import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

export default class Bootstrap {
	constructor() {
		this.app;
	}

	static InitializeCrud(models, options) {
		return new Promise((resolve) => {
			this.app = express();

			this.app.use(bodyParser.json());

			// do orm settings
			mongoose.connect(options.mongoUri || 'mongodb://localhost:27017/crud', {
				useNewUrlParser: true
			});

			mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
			mongoose.connection.once('open', () => {
				console.info('Successfully connected to MongoDB...');

				this.app.get('/', function ({res}) {
					res.send('Welcome to a new world!');
				});

				this.app.listen(options.port || 3000, () => {
					models.forEach(m => new m());
					console.info(`Bootstrapped crud app listening on port ${options.port || 3000}!`);
					resolve();
				});
			});
		});
	}

	get app() {
		return this.app;
	}
}