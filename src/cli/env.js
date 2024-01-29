const parseEnv = () => {
    const res = Object.keys(process.env)
        .filter((key) => key.includes('RSS_'))
        .map((key) => `${key}=${process.env[key]}`);

    console.log(res.join('; '));
};

parseEnv();
