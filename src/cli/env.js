const parseEnv = () => {
    const variables = Object.entries(process.env);
    const rssVariables = variables.filter(([key]) => key.startsWith('RSS'));
    console.log(
        rssVariables.map(([key, value]) => `${key}=${value}`).join('; ')
    );
};

parseEnv();
