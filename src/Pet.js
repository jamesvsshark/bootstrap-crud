import Crud from './node_modules/Crud';

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