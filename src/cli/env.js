const parseEnv = () => {
	return console.log(Object.keys(process.env)
		.filter((name) => name.startsWith("RSS_"))
		.map((name) => `${name}=${process.env[name]}`)
		.join("\n"));
};

parseEnv();