import {env} from 'node:process';

env.RSS_name = 'Carl';
env.RSS_age = 12;

export const parseEnv = () => {
    for (let item in env) {
        if (/^RSS_/.test(item)) console.log(`${item}=${env[item]}`);
    }
};

parseEnv()

