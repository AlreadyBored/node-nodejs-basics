const parseEnv = () => {

    const allEnvVariables = process.env

    const rssVariables = Object.keys(allEnvVariables)
        .filter(key => key.startsWith('RSS_'))
        .reduce((acc, key) => {
            acc[key] = allEnvVariables[key];
            return acc;
        }, {});

    const formattedVariables = Object.entries(rssVariables)
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');

    console.log(formattedVariables);
}


parseEnv();