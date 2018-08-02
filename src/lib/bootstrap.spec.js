import Bootstrap from './bootstrap';

Bootstrap.InitializeCrud = jest.fn(() => {return new Promise.resolve();});

describe('bootstrap class', () => {
	it('should be defined', () => {
		expect(Bootstrap).toBeDefined();
	});
    
	// describe('instance of', () => {
	// 	let sut;

	// 	beforeAll(() => {
	// 		Bootstrap.InitializeCrud([], {}).then(() => {});
	// 	});
	// });
});