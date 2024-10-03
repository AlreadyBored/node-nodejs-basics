import * as process from 'node:process';

const parseEnv = () => {
    Object.entries(process.env).filter(([key]) => key.startsWith('RSS_')).forEach(([key, value]) => { console.log(`${key}=${value}`) });
};

parseEnv();