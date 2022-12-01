const parseEnv = () => {
    const PREFIX = 'RSS_'
    const output = []
    for (const [key, value] of Object.entries(process.env)) {
        if (!key.indexOf(PREFIX)) output.push(`${key}=${value}`)
    }
    console.log(output.join(';'))
};

parseEnv();