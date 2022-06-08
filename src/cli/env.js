export const parseEnv = () => {
    const env = process.env;
    const matchPrefix = /^RSS_/;
    
    for (const variable of Object.keys(env)) {
        const stringified = String(variable);
        if (stringified.match(matchPrefix)) {
            console.log(`${stringified}=${env[stringified]}`)
        }
    }
};
