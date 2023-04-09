const parseEnv = () => {
    const allEnvVariables = Object.entries(process.env);

    let envVariablesWithRSS_ = allEnvVariables.filter(el => el[0].startsWith('RSS_'));

    envVariablesWithRSS_ = envVariablesWithRSS_.map(([key, value]) => `${key}=${value}`)


    console.log(envVariablesWithRSS_.join('; '));
};

parseEnv();