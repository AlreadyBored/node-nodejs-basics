const parseEnv = () => {
    const allEnvVarsWithPrefixRSS = Object.keys(process.env).filter(key => key.startsWith("RSS_"));
    const res = allEnvVarsWithPrefixRSS.map(varName => `${varName}=${process.env[varName]}`).join("; ");
    console.log(res);
};

parseEnv();