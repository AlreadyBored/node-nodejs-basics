const parseEnv = () => {
    const env = process.env;
    const envName = Object.keys(env);
    const envNameFilter = envName.filter((element) => element.slice(0, 4) === 'RSS_');
    const result = envNameFilter.map((element) => `${element}=${env[element]}`);
    console.log(result.join('; '));
};

parseEnv();