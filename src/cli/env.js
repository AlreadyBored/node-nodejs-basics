const parseEnv = () => {
    try {
        const objEnv = Object.entries(process.env);
        const rssEnv = objEnv
            .filter(([key, value]) => key.startsWith('RSS_'))
            .map(([key, value]) => `${key}=${value}`)
            .join('; ')
        console.log(rssEnv);
    } catch(err) {
        console.log(err);
    }
};

parseEnv();