const parseEnv = () => {
	const outArray = [];
	Object.keys(process.env).forEach(key => {
		if (key.startsWith('RSS_')) {
			outArray.push(`${key}=${process.env[key]}`);
		}
	});
	console.log(outArray.join('; '));
};

parseEnv();