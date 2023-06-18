const parseEnv = () => {
    const envs = process.env
    for (const envName in envs)  {
        console.log(`RSS_${envName}=${envs[envName]}`)
    }
};

parseEnv();
