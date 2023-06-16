const parseEnv = () => {
    const rsVars = Object.keys(process.env).filter(item => item.includes('RSS_'));
    rsVars.forEach(item => {
        console.log(`${item}=${process.env[item]}`)
    })
};

parseEnv();