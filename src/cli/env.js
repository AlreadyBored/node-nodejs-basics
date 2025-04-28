const parseEnv = () => {
    const envVars = process.env;
    const result = [];

    for (const [key, value] of Object.entries(envVars)) {
        if (key.startsWith('RSS_')) {
            result.push(`${key}=${value}`);
        }
    }

    console.log(result.join('; '));
};

export { parseEnv };
