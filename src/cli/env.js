const parseEnv = () => {
    let result = '';
    Object.keys(process.env).forEach((envVar) => {
        if (envVar.startsWith('RSS_')) {
            result += `${envVar}=${process.env[envVar]}; `
        }
    });

    console.log(result.slice(0, -2));
};

parseEnv();