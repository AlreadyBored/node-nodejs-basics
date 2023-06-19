const parseEnv = () => {
    const prefix ='RSS_'
    const env = process.env
    let result = []
    for (const key in env) {
        if (key.includes(prefix)) {
            const name = key.slice(prefix.length);
            const value = env[key];
            result += `RSS_${name}=${value};`
            console.log(`RSS_${name}=${value}`)
        }
    }
    console.log("result", result.toString().slice(0,-1))
};

parseEnv();