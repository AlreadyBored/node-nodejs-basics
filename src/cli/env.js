const parseEnv = () => {
    const envVars = process.env;
    const rssEnv = Object.keys(envVars).filter((key) => key.startsWith('RSS_'))
    rssEnv.forEach((env)=> console.log(`${env} = ${envVars[env]}`) )
    };

parseEnv();