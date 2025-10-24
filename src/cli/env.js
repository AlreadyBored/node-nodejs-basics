const parseEnv = () => {
    const envV = process.env;
    const rssV = [];
    for (const key in envV) {
        if (key.startsWith('RSS_')) {
            rssV.push(`${key}=${envV[key]}`);
        }
    }
    console.log(rssV.join('; '));
};

parseEnv();
