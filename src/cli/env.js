const parseEnv = () => {
    const variables = [];
    for (const key in process.env) {
        if (key.startsWith('RSS_')) {
            variables.push(key);
        }
    }
    console.log(variables.map((key) => `${key}=${process.env[key]}`).join("; "));
};

parseEnv();