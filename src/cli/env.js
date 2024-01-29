const parseEnv = () => {
    const vars = [];
    for (const key of Object.keys(process.env)) {
        if (key.startsWith('RSS_')) {
            vars.push(`${key}=${process.env[key]}`);
        }
    }
    console.log(vars.join('; '));
};

parseEnv();