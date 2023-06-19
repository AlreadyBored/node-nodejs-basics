const parseEnv = () => {
    const prefix ='RSS_'
    const env = process.env
    for (const key in env) {
        if (key.includes(prefix)) {
            const name = key.slice(prefix.length);
            const value = env[key];
            console.log('result',`RSS_${name}=${value}`)
        }
    }
};

parseEnv();