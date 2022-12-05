import * as dotenv from 'dotenv'

const parseEnv = () => {
    dotenv.config()
    const list = [];
    const prefix = 'RSS_';

    Object.keys(process.env).forEach(key => {
        if (key.includes(prefix)) {
            list.push(key + '=' + process.env[key])
        }
    });

    console.log(list.join('; '))
};

parseEnv();