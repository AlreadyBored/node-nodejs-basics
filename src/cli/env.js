export const parseEnv = () => {
    const prefixEnvArg = 'RSS_';
    const envArgs = Object.keys(process.env);
    envArgs.forEach(envArg => {
        if (envArg.slice(0,4) === prefixEnvArg) {
            console.log(`${envArg}=${process.env[envArg]}`);
        }
    });
};

parseEnv();
