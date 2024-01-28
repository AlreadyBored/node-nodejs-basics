const parseEnv = () => {
    const envVariables = process.env;

    const rssEnvVars = Object.keys(envVariables)
        .filter(key => key.startsWith('RSS_'))
        .reduce((acc, key) => {
            return acc + `${key}=${envVariables[key]}; `;
        }, '')
        .slice(0, -2);

    console.log(rssEnvVars);
};

parseEnv();