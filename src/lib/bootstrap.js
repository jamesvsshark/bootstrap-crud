import express from 'express';
import mongoose from 'mongoose';

export default class Bootstrap {
    constructor() {
        this.app;
    }

    static InitializeCrud() {
        return new Promise((resolve, reject) => {
            this.app = express();

            // do orm settings
            mongoose.connect('mongodb://localhost:27017/crud', {
                useNewUrlParser: true
            });

            mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
            mongoose.connection.once('open', () => {
                console.info('Successfully connected to MongoDB...');

                this.app.get('/', function (req, res) {
                    res.send('Welcome to a new world!')
                });

                this.app.listen(3000, () => {
                    console.info('Bootstrapped crud app listening on port 3000!');
                    resolve();
                });
            });
        });
    }

    get app() {
        return this.app;
    }
}