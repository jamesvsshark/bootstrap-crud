import Crud from './Crud';
import {routeBuilder} from './utils/routes';

jest.mock('./utils/routes');

describe('Crud class', () => {
	it('should be defined', () => {
		expect(Crud).toBeDefined();
		expect(Crud).toBeInstanceOf(Function);
	});
    
	describe('Instance of', () => {
		let sut;

		const testModel = {name: String};
		const options = {routeName: 'tests'};
		const seedOptions = {seed: true, seedData: [{}]};
        
		beforeAll(() => {
			sut = new Crud(testModel, options, seedOptions);
		});

		it('should call to the routeBuilder on initialization', () =>{
			expect(routeBuilder).toHaveBeenCalled();
		});
        
		it('should have the instance of tests on the models array', () => {
			expect(sut.models.length).toBe(1);
		});
	});
});