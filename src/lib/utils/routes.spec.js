import {getRefKeysFromSchema} from './routes';

describe('routes actions', () => {
	describe('getRefKeysFromSchema', () =>{
		it('should return back the correct key name that has a ref key', () => {
			const sampleSchema = {name: String, author: {type: Object, ref: 'Person'}};
			const expectedResult = 'author';
			expect(getRefKeysFromSchema(sampleSchema)).toEqual(expectedResult);
		});
	});
});