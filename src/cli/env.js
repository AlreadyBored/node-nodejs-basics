export const parseEnv = () => {
    const envVariables = process.env;
    const result = Object.keys(envVariables).reduce((prev, current) => 
        current.startsWith('RSS_') ? [...prev, `${current}=${envVariables[current]}`] : prev
    , []);

    console.log(result.join('; '));
};

parseEnv();