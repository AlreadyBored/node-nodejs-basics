const parseEnv = () => {
    for (const variable in process.env) {
        if (!variable.startsWith('RSS_')) continue;
        console.log(`${variable}=${process.env[variable]};`);
    }
};

parseEnv();