const parseEnv = () => {
    // get environment variables
    const env = process.env;

    // print environment variables with their values
    for (const variable in env) {
        console.log(`RSS_${variable}=${env[variable]}`);
    }
};

parseEnv();
