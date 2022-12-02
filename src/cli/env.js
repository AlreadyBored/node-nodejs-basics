const parseEnv = () => {
    Object.entries(process.env)
        .forEach(([envName, envValue]) => {
            if (envName.substring(0, 4) === 'RSS_') {
                process.stdout.write(`${envName}=${envValue}; `)
            }
        })

};

parseEnv();