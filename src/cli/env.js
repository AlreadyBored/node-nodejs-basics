const parseEnv = () => {

    console.log(Object.keys(process.env).reduce((result, key) => {
        return `${result} RSS_${key}=${process.env[key]};`;
    }, '').trim().slice(0, -1));

};

parseEnv();