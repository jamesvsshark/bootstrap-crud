
 # No more boiler plate CRUD for your express app!
 [![Build Status](https://travis-ci.org/jamesvsshark/bootstrap-crud.svg?branch=master)](https://travis-ci.org/jamesvsshark/bootstrap-crud)

This project was bootstrapped with [jamesvsshark/bootstrap-crud](https://github.com/jamesvsshark/bootstrap-crud).

Takes a simple class and dynamically creates your Mongoose schema and HTTP verb api routes.

1. Bootstrap your app (see src/App.js)

2. Extend the Crud class and pass in your options (see src/Models/Pet.js)

The following code: 

```javascript
import Crud from '../lib/Crud';
import { Schema } from 'mongoose';

export default class Pet extends Crud {
    constructor() {
        const model = {
            name: String,
            breed: String,
            age: Number,
            owner: {type: Schema.Types.ObjectId, ref: 'Person'}
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
```

will make the following routes available:
- localhost:3000/pets [GET]
- localhost:3000/pets [POST]
- localhost:3000/pets/:id [GET]
- localhost:3000/pets/:id [PUT]
- localhost:3000/pets/:id [DELETE]

More to follow soon! [What's been done?](CHANGELOG.md)

What features would you like to see next? 
