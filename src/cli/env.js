const parseEnv = () => {
    for (const key in process.env) {
        if (key.startsWith("RSS_")) {
            const value = process.env[key];
            console.log(`${key}=${value}`);
        }
    }
};

parseEnv();
