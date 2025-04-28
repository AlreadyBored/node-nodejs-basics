const parseEnv = () => {
    // Write your code here 
    const envVars = process.env;
 
    const rssVars = Object.entries(envVars)
        .filter(([key, _]) => key.startsWith('RSS_'))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');

    console.log(rssVars);
};

parseEnv();