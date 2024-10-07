const parseEnv = () => {
    // Write your code here 

    const envVars = process.env;

    // Filter the env vars that start with 'RSS_'
    const rssVars = Object.keys(envVars)
        .filter(key => key.startsWith('RSS_'))
        .map(key => `${key}=${envVars[key]}`);

    // Join the env vars into a string
    const result = rssVars.join('; ');

    // Print the result
    console.log(result);
};

parseEnv();