const parseEnv = () => {
    for(const env in process.env) {
        if (!env.startsWith('RSS_')) {
            continue;
        }

        console.log(`${env}=${process.env[env]}`);
    }
};

parseEnv();