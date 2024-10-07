const parseEnv = () => {
    const rssArg = [];

    for (let key in process.env) {
        if (key.startsWith('RSS_')){
            rssArg.push(`${key}=${process.env[key]}`);
        }
    }
    console.log(rssArg.join(';'));
};

parseEnv();
