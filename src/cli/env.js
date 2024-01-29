const parseEnv = () => {
    const PATERN = 'RSS_';
    let result = Object.entries(process.env)
        .filter(([key]) => key.indexOf(PATERN) === 0)
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');
    
    console.log(result);
};

parseEnv();