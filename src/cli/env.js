import dotenv from 'dotenv';

const parseEnv = () => {
    dotenv.config();
    const prefix = 'RSS_';
    let output = '';
    for (let key in process.env) {
        if (key.startsWith(prefix)) {
            output += `${key}=${process.env[key]}; `
        }
    }
    console.log(output)
};

parseEnv();
