const parseEnv = () => {
    const envParams = process.env;
    const result =  Object.keys(envParams).filter((key) => key.startsWith('RSS_'))
        .map(key => `${key}=${envParams[key]}`)
        .join('; ');

    console.log(result);
};

parseEnv();