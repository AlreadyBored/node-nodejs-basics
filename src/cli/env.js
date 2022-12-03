import process from 'node:process';

const parseEnv = () => {

    const env = process.env;
    Object.keys(env).forEach(elem => {
        if (elem.includes('RSS_')) {
            console.log(`${elem}=${env[elem]}; `)
        }
    })
};

parseEnv();