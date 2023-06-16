import { stdout } from 'process';

const parseEnv = () => {
    const startsWith = 'RSS_'
    
    for (const env in process.env) {
        if (env.startsWith(startsWith)) {
            stdout.write(`${env}=${process.env[env]}\n`);
        }
    }
};

parseEnv();
