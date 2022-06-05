export const parseEnv = () => {
	const variables = [];

    for (const variable in process.env) {
			if (variable.startsWith('RSS_')) {
				variables.push(`${variable}=${process.env[variable]}`);
			}
    };

	console.log(variables.join('; '));
};

parseEnv();