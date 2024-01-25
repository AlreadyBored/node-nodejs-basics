const parseEnv = () => {
    for (const variable in process.env) {
        if (!variable.startsWith('RSS_')) continue;
        const res = variable + '=' + process.env[variable];
        
        console.log(res);
    }
};

parseEnv();