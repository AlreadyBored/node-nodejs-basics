const parseEnv = () => {
    var env = process.env;
    Object.keys(env).forEach((key) => {
        if (key.startsWith('RSS_')) {
            console.log(key + '=' + env[key]);
        };
    });
};

parseEnv();