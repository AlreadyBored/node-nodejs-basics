import { env } from 'process';

const parseEnv = () => {
    const res = Object.keys(env).filter(key => key.startsWith('RSS_')).map(val => `${val}=${env[val]}`);
    console.log(res.join('; '));
};

parseEnv();