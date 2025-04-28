const parseEnv = () => {
    // Write your code here
    const envs = Object.entries(process.env)
        .filter(([key]) => key.startsWith('RSS_'))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');

    console.log(envs);
};

parseEnv();