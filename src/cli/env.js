export const parseEnv = () => {
    for(const [key, value] of Object.entries(process.env)) {
        if(key.startsWith('RSS_')){
            process.stdout.write(`${key}=${value}; `);
        }
    }
};

parseEnv();