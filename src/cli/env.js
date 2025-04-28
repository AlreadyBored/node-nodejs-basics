const parseEnv = () => {
    const env = process.env;

    const rssVars = Object.entries(env).filter(([key]) => key.startsWith('RSS_'));

    const output = rssVars.map(([key, value]) => `${key}=${value}`).join('; ');

    console.log(output);
};

parseEnv()
