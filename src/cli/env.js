const parseEnv = () => {
    for (const prop in process.env) {
        if (prop.includes('RSS_')) {
            console.log(`${prop}=${process.env[prop]}`)
        }
    }
};

parseEnv();