const ENV_RSS_PREFIX = 'RSS_';

export const parseEnv = () => {
    for (const enVariable in process.env) {
        if (~enVariable.indexOf(ENV_RSS_PREFIX)) {
            console.log(`${enVariable}=${process.env[enVariable]}`);
        }
    }
};

parseEnv();
