const parseEnv = () => {
    const envVariables = process.env;
    const rssVariables = Object.keys(envVariables)
        .filter(key => key.startsWith('RSS_'))
        .map(key => `${key}=${envVariables[key]}`)

    console.log(rssVariables.join('; '))
};

parseEnv();
