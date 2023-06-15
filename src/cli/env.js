const parseEnv = () => {
    const prefix = 'RSS_';
    const env = process.env;
    const filtered = Object.entries(env).filter(([key]) => key.startsWith(prefix))
    .map(([key, value]) => `${key} is ${value}`);
    console.log(filtered.join(', '));
};

parseEnv();
