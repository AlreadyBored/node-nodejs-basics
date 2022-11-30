const parseEnv = () => {
    const variablesStartWithRSS = Object.entries(process.env).reduce(
        (variables, [key, value]) => {
            if (key.startsWith('RSS_')) {
                variables.push(`${key}=${value}`)
            }
            return variables
        }, [])
    console.log(variablesStartWithRSS.join('; '))
};

parseEnv();