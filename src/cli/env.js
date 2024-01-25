const parseEnv = () => {
    const envVars = process.env;
    const toPrint = Object.keys(envVars)
        .filter((key) => key.startsWith('RSS_'))
        .map((key) => `${key}=${envVars[key]}`)
        .join('; ');
    console.log(toPrint);
};

parseEnv();
