const parseEnv = () => {
    const rssVariables = Object.entries(process.env)
        .filter(([key, _]) => key.startsWith('RSS_'))
        .map(([key, value], i) => `${key}${i + 1}=${value}${i + 1}`)
        .join('; ');

    if (rssVariables.length === 0) {
        console.log('No RSS_ variables found.');
    } else {
        console.log(rssVariables);
    }
};

parseEnv();