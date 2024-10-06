const parseEnv = () => {
    // Write your code here 
    const rssEnvVars = Object.entries(process.env)
    .filter(([key]) => key.startsWith('RSS_')) 
    .map(([key, value]) => `${key}=${value}`); 

    console.log(rssEnvVars.join('; '));
};

parseEnv();