import { env } from 'node:process';


const PREFIX = 'RSS_';

const parseEnv = () => {
    const envKeys = Object.keys(env);
    const rssKeys = envKeys.filter(key => key.includes(PREFIX));

    const result = rssKeys.reduce((acc, currentKey, index) => {
        const isLastKey = index === (rssKeys.length - 1);

        return acc + `${currentKey}=${env[currentKey]};${isLastKey ? '' : ' '}`;
    }, '');

    console.log(result);
};

parseEnv();
