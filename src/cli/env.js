const template = 'RSS_';

const parseEnv = () => {
    const params = process.env;
    const rssKeys = Object.keys(params).filter(i => i.includes(template));
    let res = [];
    
    rssKeys.forEach((key) => {
        res.push(`${key}=${params[key]}`);
    })

    console.log(res.join('; '));
};

parseEnv();