const parseEnv = () => {
    const rssVars = Object.keys(process.env)
        .filter(key => key.startsWith('RSS_'))
        .map(key => `${key}=${process.env[key]}`)
        .join('; '); 

    console.log(rssVars);
};

parseEnv();
