const parseEnv = () => {
    const rssKeys = Object.keys(process.env).filter((key) => key.match(/^RSS_/gm));
    const result = [];
    for (let rssKey of rssKeys) {
        result.push(`${rssKey}=${process.env[rssKey]}`);
    }
    console.log(result.join('; '));
};

parseEnv();