const parseEnv = () => {
    for (const key in process.env) {
        if (key.startsWith('RSS_')) {
            console.log(`RSS_${key}=${process.env[key]}`);
        }
    }
};

parseEnv();