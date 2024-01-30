import { env } from 'process';


const parseEnv = () => {
    console.log(Object.keys(env).filter(el => el.includes('RSS_')).map(el => `${el}=${env[el]}`).join('; '));
};

parseEnv();