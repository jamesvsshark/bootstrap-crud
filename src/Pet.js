import Crud from './lib/Crud';

export default class Pet extends Crud {
    constructor() {
        const model = {
            name: String,
            breed: String,
            age: Number
        };

        super(model, {
            routeName: 'pet',
            routePluralName: 'pets'
        });
    }
}