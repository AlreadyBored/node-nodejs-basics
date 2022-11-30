const parseEnv = () => {
    const args = Object.entries(process.env)
        .filter(([key]) => key.includes("RSS_"))
        .map(([key, value]) => `${key}=${value}`)
        .join("; ");

    console.log(args);
};

parseEnv();
