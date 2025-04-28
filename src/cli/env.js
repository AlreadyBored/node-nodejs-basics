const parseEnv = () => {
    const envVars = process.env;
    const rssVars = Object.keys(envVars)
        .map(key => `RSS_${key}=${envVars[key]}`)
        .join('; ');

    console.log(rssVars);
};

parseEnv();