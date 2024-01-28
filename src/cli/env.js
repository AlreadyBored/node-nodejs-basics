const parseEnv = () => {
    const prefix = 'RSS_';
    const parsedEnvVariables = Object.entries(process.env)
        .filter(([key]) => key.startsWith(prefix))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');

    console.log(parsedEnvVariables);
};

parseEnv();
