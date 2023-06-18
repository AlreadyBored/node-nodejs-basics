const parseEnv = () => {
    // Write your code here 
    const envKeys = Object.keys(process.env)
    const RSSKeys = envKeys.filter(key => key.startsWith('RSS_'))
    let result = ''
    RSSKeys.forEach((key, i) => {
      result += `${key}=${process.env[key]}${(RSSKeys.length - 1) !== i ? '; ' : ''}`
    })
    console.log(result) 
};

parseEnv();