process.env.RSS_name1 = 'bar';
process.env.RSS_name2 = 'foo';
const parseEnv = () => {
    // Write your code here 
    const envKeys = Object.keys(process.env)
    const RSSKeys = envKeys.filter(key => key.startsWith('RSS_'))
    console.log(envKeys)
    RSSKeys.forEach(key => console.log(`${key}=${process.env[key]}`)) 
};

parseEnv();