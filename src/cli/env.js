import { stdout } from 'process'
 
export const parseEnv = () => {
    // Write your code here 
    const PREFIX = 'RSS_'
    const env  = process.env;
    let res = [];

    Object.keys(env).forEach((key) => {
        if(key.startsWith(PREFIX)) {
            const str = `${key}=${env[key]}`
            res.push(str);
        }
    })

    stdout.write(res.join('; '));
};

parseEnv();