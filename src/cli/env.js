import * as process from 'process';

const parseEnv = () => {
    
    const currentEnv = process.env;
    
    const arr = Object.keys(currentEnv).filter((item) => {
            return item.split('').slice(0, 4).join("") == 'RSS_'
        })

    arr.forEach((key, i) => {
        console.log(`${key}${i+1}=${currentEnv[key]}${i+1}`)
    })

};

parseEnv();