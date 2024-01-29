import process from 'node:process';

const parseEnv = () => {
    const nodeEnv = process.env;
    const RSS = {} 
    for (let key of Object.keys(nodeEnv))
    if (key.startsWith("RSS_")) RSS[key] = nodeEnv[key];
    console.log(RSS)
};

parseEnv();