import { env } from 'process';

const parseEnv = () => {
    const rssVars = Object.entries(env)
        .filter(([key]) => key.startsWith('RSS_'))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');
    
    console.log(rssVars);
};

parseEnv();
