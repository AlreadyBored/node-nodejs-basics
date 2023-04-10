const parseEnv = () => {
    // Get environment variables
    const env = process.env;

    // Print environment variables with their values
    for (const variable in env) {
        console.log(`RSS_${variable}=${env[variable]}`);
    }
};

parseEnv();
