const parseEnv = () => {
    // Write your code here
    const stringEnv = getRSSEnv(process.env);
    console.log(stringEnv)
};

const getRSSEnv = (env) => {
    const resultEnv = [];
    Object.keys(env)
        .filter(key => key.match(/RSS/gi))
        .forEach(key => resultEnv.push(`${key}=${env[key]}`));

    return resultEnv.join('; ');
}

parseEnv();