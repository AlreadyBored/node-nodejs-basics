const parseEnv = () => {
    // Write your code here
    const prefix = 'RSS_'
    let res = ''
    const env = process.env
    for (const envKey in env) {
        if (envKey.includes(prefix)) {
            res += envKey + '=' + env[envKey] + '; '
        }
    }
    console.log(res)
};

parseEnv();