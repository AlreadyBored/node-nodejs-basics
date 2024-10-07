const parseEnv = () => {
    const rssEnvVariables = Object.entries(process.env)
        .filter(([key]) => key.startsWith('RSS_'))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');

    console.log(rssEnvVariables);
};

parseEnv();
