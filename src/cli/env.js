const parseEnv = () => {
    // Write your code here 
    const prefix = 'RSS_';

    Object.keys(process.env).forEach((envVar) => {
        if (envVar.startsWith(prefix)) {
            const formattedVar = envVar.substring(prefix.length);
            const value = process.env[envVar];
            console.log(`RSS_${formattedVar}=${value}`);
        }
    });
};

parseEnv();