import { env } from 'node:process';

const parseEnv = () => {
    const envVars = Object.entries(env)
        .filter(([name, value]) => name.startsWith('RSS_'))
        .map((nameVal) => nameVal.join('='))
        .join('; ');

    console.log(envVars);
};

parseEnv();