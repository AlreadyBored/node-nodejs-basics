const parseEnv = () => {
    const env = Object.entries(process.env)
    const rss = env.filter(([key]) => key.startsWith('RSS_'))
    const formatted = rss.map(([key, value]) => `${key}=${value}`).join('; ')
    console.log(formatted)
};

parseEnv();