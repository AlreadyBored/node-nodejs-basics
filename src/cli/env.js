const parseEnv = () => {
    const entries = [];

    for (const key in process.env) {
        if (key.startsWith('RSS_')) {
            entries.push(`${key}=${process.env[key]}`);
        }
    }
    console.log(entries.join('; '))
};

parseEnv();