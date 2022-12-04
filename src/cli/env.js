import { env } from 'node:process';

const parseEnv = () => {
    const rssArray = [];

    for(var i in env){
        if(i.includes('RSS_')){
            rssArray.push(i + '=' + env[i]);
        }
    }

    console.log(rssArray.join('; '));
};

parseEnv();