import { env, stdout } from 'process';

const parseEnv = () => {
    for (const key in env) {
        if (key.includes('RSS_')) stdout.write(`${key}=${env[key]}`);
    } 
};

parseEnv();