const parseEnv = () => {
    // Write your code here
    const content = Object.keys(process.env)
        .filter(item => item.startsWith("RSS_"))
        .map(rssVar => `${rssVar}=${process.env[rssVar]}`)
        .join("; ");
    console.log(content); 
};

parseEnv();