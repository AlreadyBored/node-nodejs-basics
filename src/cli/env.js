const parseEnv = () => {
    const envvariables = Object.entries(process.env)
        .filter(([key, _]) => !!key.match(/RSS/))
        .map(arg => arg.join('='))
        .join('; ');
    console.log(envvariables);
};

parseEnv();