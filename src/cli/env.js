import { stdout } from 'process'
 
export const parseEnv = () => {
    // Write your code here 
    const PREFIX = 'RSS_'
    const env  = process.env;
    let str = '';

    Object.keys(env).forEach((key) => {
        if(key.startsWith(PREFIX)) {
            str += `${key}=${env[key]}; `
        }
    })

    stdout.write(str);
};

parseEnv();