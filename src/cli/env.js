const parseEnv = () => {
    const prefix = 'RSS_';
    const envVars = process.env;
    const output = [];

    for (const key in envVars) {
        if (key.startsWith(prefix)) {
            output.push(`${key}=${envVars[key]}`);
        }
    }

    console.log(output.join('; '));
};

parseEnv();