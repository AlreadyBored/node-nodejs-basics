const parseEnv = () => {
	const envVariables = process.env;
	const rsVariables = Object.keys(envVariables)
		.filter(variable => variable.startsWith('RSS_'));
	const output = rsVariables
		.map(variable => `${ variable }=${ envVariables[variable] }`)
		.join('; ');
	console.log(output);
};

parseEnv();
