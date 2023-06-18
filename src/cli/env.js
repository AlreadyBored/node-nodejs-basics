const parseEnv = () => {
	// Write your code here
	Object.entries(process.env).forEach(([key, value]) => {
		if (key.startsWith('RSS_')) {
			console.log(`${key}=${value};`);
		}
	});
};

parseEnv();
