import { env } from 'node:process';

const parseEnv = () => {
    const rssEnvs = Object.entries(env)
		.filter(([key]) => key.indexOf('RSS_') === 0)
		.map(([key, value]) => `${key}=${value}`)
		.join('; ');

	console.log(rssEnvs);
};

parseEnv();
