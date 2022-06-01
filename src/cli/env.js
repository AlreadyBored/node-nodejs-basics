import {env} from 'node:process';

export const parseEnv = () => {
    for (let item in env) {
        if (/^RSS_/.test(item)) console.log(`${item}=${env[item]}`);
    }
};

parseEnv()

