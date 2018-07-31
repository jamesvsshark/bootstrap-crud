import mongoose from 'mongoose'
import Bootstrap from './bootstrap';

export default class Crud {
    constructor(model, options) {
        const App = Bootstrap.app;

        this.models = [];

        // setup routes
        console.info(`Setting up routes for ${options.routePluralName}...`);

        App.get(`/${options.routeName}/:${options.routeName}Id`, function (req, res) {
            res.send(`Hello from the ${options.routeName}/:${options.routeName}Id GET route!`)
        });

        App.get(`/${options.routePluralName}`, (req, res) => {
            this.model.find({}, (err, data) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                }

                return res.status(200).json({
                    data: data
                });
            });
        });

        App.post(`/${options.routePluralName}`, function (req, res) {
            res.send(`Hello from the ${options.routePluralName} POST route!`)
        });

        App.put(`/${options.routePluralName}/:${options.routeName}Id`, function (req, res) {
            res.send(`Hello from the ${options.routePluralName}/:${options.routeName}Id PUT route!`)
        });

        // setup mongoose collection
        console.info(`Setting up mongoose collection for ${options.routePluralName}...`);
        this.models.push({
            [this.constructor.name]: mongoose.model(this.constructor.name, new mongoose.Schema(model))
        });
    }

    get model() {
        const model = this.models.find(m => {
            return m[this.constructor.name];
        });

        return model[this.constructor.name];
    }
}