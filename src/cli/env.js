const parseEnv = () => {
	// Write your code here
	for (let key in process.env) {
		if (key.startsWith('RSS_')) {
			console.log(`RSS_${key.substring(4)}=${process.env[key]};`);
		}
	}
};

parseEnv();
