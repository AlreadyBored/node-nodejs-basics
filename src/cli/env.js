import { env } from 'node:process';

const parseEnv = () => {
    const rssEnvs = Object.entries(env)
		.filter(([key]) => key.startsWith('RSS_'))
		.map(([key, value]) => `${key}=${value}`)
		.join('; ');

	console.log(rssEnvs);
};

parseEnv();
