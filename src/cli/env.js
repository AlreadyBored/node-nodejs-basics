const parseEnv = () => {
    const env = process.env;
    const result = Object.keys(env).map((key) => `RSS_${key}=${env[key]}`).join('; ');
    console.log(result);
};

parseEnv();