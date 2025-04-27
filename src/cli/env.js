import { env } from 'process';

const parseEnv = () => {
    const parsedVariables = Object.keys(env).reduce((acc, envItem) => {
        if (envItem.startsWith('RSS_')) {
            acc.push(`${envItem}=${env[envItem]}`);
        }
        return acc;
    }, []).join('; ');

    console.log(parsedVariables);
};

parseEnv();
