const parseEnv = () => {
    const processEnv = process.env
    const env = Object.keys(processEnv)
        .filter((val) => val.startsWith('RSS_')).map((key) => {
        return `${key}=${processEnv[key]}`
    }).join('; ');
    console.log(env);
};

parseEnv();
