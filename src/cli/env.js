import { env } from 'process';

export const parseEnv = () => {
    // Write your code here 
    const result = Object.keys(env).filter(key => key.startsWith('RSS_')).map(key => {
        console.log(key + ' = ' + env[key]);
        return {
            key: key,
            value: env[key]
        };
    });
};

parseEnv();
