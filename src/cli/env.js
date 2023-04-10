const parseEnv = () => {
    const perfix = "RSS_";
    const variable = Object.entries(process.env).reduce((prev, [key, value])=> 
        key.startsWith(perfix) ? [...prev, `${key}=${value}`] : prev, []
    ).join("; ")

    console.log(variable);
};

parseEnv();