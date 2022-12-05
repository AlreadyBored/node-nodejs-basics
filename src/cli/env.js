const parseEnv = () => {
	Object.entries(process.env).forEach(obj => {
		console.log(`RSS_${obj[0]}=${obj[1]}`)
	})
};

parseEnv();