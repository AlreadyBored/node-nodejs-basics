const parseEnv = () => {
    for (const el in process.env) {
        if (el.startsWith('RSS_')) {
            const name = el.substring(4);
            console.log(`RSS_${name}=${process.env[el]}`);
        }
    }
};

parseEnv();