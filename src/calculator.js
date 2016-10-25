import adder from './adder';

const calculator = (num) => {
	const added = adder(num, num);
	return added + num;
};

export default calculator;
