const parseEnv = () => {
    const result = Object.entries(process.env).reduce((acc, [key, value]) => {
        if (key.startsWith('RSS_', 0)) {
            acc += `${key}=${value}; `
        }

        return acc
    }, '')
    console.log(result)
};

parseEnv();
