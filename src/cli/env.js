const parseEnv = () => {
    const cliEnvs = process.env;
    let envs = [];
    for (const [ key, value ] of Object.entries(cliEnvs)) {
        if (key.startsWith('RSS_')) {
            envs.push(`${key}=${value}`);
        }
    }
    console.log(envs.join('; '));
};

parseEnv();