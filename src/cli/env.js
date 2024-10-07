const parseEnv = () => {
    const availableEnv = Object.keys(process.env)
        .filter(key => key.startsWith('RSS_'))
        .map(key => `${key}=${process.env[key]}`)
        .join('; ');

    console.log(availableEnv)
};

parseEnv();
