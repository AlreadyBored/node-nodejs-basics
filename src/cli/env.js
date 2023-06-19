const parseEnv = () => {
    Object.entries(process.env).forEach(([key, value]) => {
        if(key.startsWith('RSS_')) {
            console.log(`${key} = ${value}`);
        }
    })
    
};

parseEnv();