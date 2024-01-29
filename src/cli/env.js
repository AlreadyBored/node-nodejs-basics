const parseEnv = () => {
    // Get all environment variables
    const allEnv = process.env

    const rssVariables = Object.entries(allEnv)
        .filter(([key]) => key.startsWith('RSS_'))

    rssVariables.forEach(([key, value]) => {
        console.log(`${key}=${value};`)
    });
};

parseEnv();