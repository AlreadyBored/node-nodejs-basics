const parseEnv = () => {
    for (let key in process.env) {
        if (process.env.hasOwnProperty(key) && key.startsWith('RSS_')) {
            console.log(`${key}=${process.env[key]};`)
        }
    }
};

parseEnv();
