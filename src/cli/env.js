const parseEnv = () => {
    const envVars = process.env;

    const filteredVars = Object.entries(envVars)
        .filter(([key]) => key.startsWith('RSS_'))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');

    console.log(filteredVars);
};

parseEnv();
