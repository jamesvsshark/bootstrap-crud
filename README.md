
 # No more boiler plate CRUD for your express app!

Takes a simple class and dynamically creates your Mongoose schema and routes.

1. Bootstrap your app (see src/App.js)

2. Extend the Crud class and pass in your options (see src/Models/Pet.js)

The following code: 

```javascript
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
```

will make the following routes available:
- localhost:3000/pets [GET]
- localhost:3000/pets [POST]
- localhost:3000/pets/:petId [GET]
- localhost:3000/pets/:petId [PUT]
- localhost:3000/pet/:petId [DELETE]

More to follow soon!
- TS Support
- Tests