process.env.RSS_name1 = 'value1';
process.env.RSS_name2 = 'value2';

const parseEnv = () => {
	const variables = [];

	for (let env in process.env) {
		if (env.match(/RSS_\w*/)) {
			variables.push(`${env}=${process.env[env]}`);
		}
	}
	console.log(variables.join('; '));
};

parseEnv();
