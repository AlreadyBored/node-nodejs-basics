import * as process from 'process';
const parseEnv = () => {
    const rssPrefix = 'RSS_';

    const envsPairs = Object.entries(process.env)
        .map(([key, value]) => key.startsWith(rssPrefix) && `${key}=${value}`)
        .filter(item => item)
        .join('; ');

    if (envsPairs) console.log(envsPairs);
};

parseEnv();