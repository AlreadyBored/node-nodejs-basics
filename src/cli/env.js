const parseEnv = () => {
    const variables = Object.entries(process.env)
        .filter(([name]) => name.match(/^RSS_/))
        .map(([name, value]) => `${name}=${value}`).join('; ');
    console.log(variables);    
};

parseEnv();