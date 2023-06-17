const prefix = 'RSS_';

const parseEnv = () => {
	const envVars = process.env;
	const formattedEnvVars = Object.keys(envVars).reduce((acc, value) => 
		value.startsWith(prefix) ? [...acc, `${value}=${envVars[value]}`] : acc, []);

	console.log(formattedEnvVars.join(', '));
	
};

parseEnv();