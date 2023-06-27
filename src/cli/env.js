const parseEnv = () => {
	// process.env - environment variables as paires - key:value
	const specifiedEnvVars = Object.keys(process.env).filter((envVars) =>
		envVars.startsWith('RSS_')
	);

	const stringifiedEnvVars = specifiedEnvVars
		.map((envVar) => `${envVar} = ${process.env[envVar]}`)
		.join('; ');

	console.log('The environment variables are:\n', stringifiedEnvVars + '\n');
};

parseEnv();
