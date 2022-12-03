import process from 'node:process';

const parseEnv = () => {
    Object.keys(process.env).forEach(item => {
        if (item.includes('RSS_')){
            console.log(`${item}=${process.env[item]}; `)
        }
    })
};

parseEnv();