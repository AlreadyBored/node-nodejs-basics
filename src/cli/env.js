const parseEnv = () => {
    const obj = process.env;
    for (const key in obj) {
        if (key.startsWith('RSS_')) {
            console.log(`${key}=${obj[key]}`); 
        }
    }
};

parseEnv();