import mongoose from 'mongoose'
import Bootstrap from './bootstrap';

export default class Crud {
    constructor(model, options, {
        seed,
        seedData
    } = {}) {
        const App = Bootstrap.app;

        this.models = [];

        // setup routes 
        // todo move to util/routes
        console.info(`Setting up routes for ${options.routeName}...`);

        App.get(`/${options.routeName}/:id`, (req, res) => {
            this.model.findById(req.params.id || req.query.id, (err, data) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                }

                if (!data) {
                    return res.status(404).json({
                        message: 'Resource not found'
                    });
                }

                return res.status(200).json({
                    data: data
                });
            });
        });

        App.get(`/${options.routeName}`, (req, res) => {
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

        App.post(`/${options.routeName}`, (req, res) => {
            if (req.body._id) {
                delete req.body._id;
            }

            this.model.create(req.body, (err, data) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                }

                return res.status(201).json({
                    data: data
                });
            });
        });

        App.put(`/${options.routeName}/:id`, (req, res) => {
            this.model.findByIdAndUpdate(req.params.id || req.query.id, req.body, {
                new: true
            }, (err, data) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                }

                if (!data) {
                    return res.status(404).json({
                        message: 'Resource not found'
                    });
                }

                return res.status(201).json({
                    data: data
                });
            });
        });

        App.delete(`/${options.routeName}/:id`, (req, res) => {
            this.model.findByIdAndRemove(req.params.id || req.query.id, (err, data) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                }

                if (!data) {
                    return res.status(404).json({
                        message: 'Resource not found'
                    });
                }

                return res.status(200).json({
                    data: data
                });
            });
        });

        // setup mongoose collection
        console.info(`Setting up mongoose collection for ${options.routeName}...`);
        this.models.push({
            [this.constructor.name]: mongoose.model(this.constructor.name, new mongoose.Schema(model))
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