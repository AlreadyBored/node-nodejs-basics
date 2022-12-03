const parseEnv = () => {
    Object.entries(process.env).forEach(([key, value]) => {
        if (/^RSS_/m.test(key)) {
            console.log(`${key}=${value}`);
        }
    });
};

parseEnv();
