const parseEnv = () => {
    const prefix = 'RSS_';
    const rssEnvVariables = Object.entries(process.env)
        .filter(([key, value]) => key.startsWith(prefix))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');
    if (rssEnvVariables) {
        console.log(rssEnvVariables);
    } else {
        throw new Error('FS operation failed');
    }
};

parseEnv();
