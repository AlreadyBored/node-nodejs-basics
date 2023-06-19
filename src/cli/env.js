const parseEnv = () => {
	for (let proc in process.env) {
		if (proc.slice(0, 4) === 'RSS_') console.log(process.env[proc]);
	}
};

parseEnv();
