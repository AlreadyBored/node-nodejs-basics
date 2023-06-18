const parseEnv = () => {
    const prefix = 'RSS_';
    const filtered = Object.entries(process.env)
    .filter(([key]) => key.startsWith(prefix))
    .map(([key, value]) => `${key} is ${value}`);
    console.log(filtered.join(', '));
};

parseEnv();
