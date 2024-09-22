const parseEnv = () => {
    const VAR_PREFIX = 'RSS';

    const rssEntries = Object.entries(process.env).filter(([k, _]) => k.startsWith(VAR_PREFIX));
    const transformedEntries = rssEntries.map(([k, v]) => `${k}=${v}`);
    const result = transformedEntries.join('; ')

    if (result.length) {
        console.log(result)
    }
};

parseEnv();
