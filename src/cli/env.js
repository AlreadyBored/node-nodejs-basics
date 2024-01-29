conconst parseEnv = () => {
	console.log("Parsing env vars...");
	const envVars = process.env;

	const rssVars = Object.entries(envVars)
		.filter(([key, value]) => key.startsWith('RSS_'));

	rssVars.forEach(([key, value]) => {
		console.log(`RSS_${key}=${value}`);
	});
};

parseEnv();
