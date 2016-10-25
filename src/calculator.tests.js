import calculator from './calculator';

jest.mock('./adder', () => {
	return jest.fn(() => 30);
});

test('blah', () => {
	expect(calculator(10)).toEqual(40);
});
