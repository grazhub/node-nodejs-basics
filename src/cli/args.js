const prefix = '--';

const parseArgs = () => {
	const args = process.argv.slice(2);
	const argStringsArr = args.reduce((acc, val, ind, array) => {
		if (val.startsWith(prefix)) {
			const argValue = array[ind + 1];
			const formatted = `${val.replace(prefix, '')} is ${argValue}`;
			return [...acc, formatted];
		}
		return acc;
	}, []);

	console.log(argStringsArr.join(', '));
};

parseArgs();