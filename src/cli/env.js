const parseEnv = () => {
    console.log(
        Object.entries(process.env)
            .filter(([key, _]) => key.startsWith('RSS_'))
            .map(([key, value]) => `${key}=${value}`)
            .join("; ")
    ); 
};

parseEnv();