const parseEnv = () => {
    console.log(Object.keys(process.env).filter((elem) => elem.startsWith('RSS_')).map((elem) => `${elem}=${process.env[elem]}`).join('; '));
};

parseEnv();
