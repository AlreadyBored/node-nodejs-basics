import {env} from 'node:process';

export const parseEnv = () => {
    let result = '';
    for (let item in env) {
        if (/^RSS_/.test(item)) result += `${item}=${env[item]};`;
    }
    return result
};

console.log(parseEnv())

