const parseEnv = () => {
    const result=[];
    const variables = Object.keys(process.env).filter(key => key.startsWith('RSS_'))
    variables.forEach(key => result.push(`${key}=${process.env[key]}`))
    console.log(result.join('; '))
};

parseEnv();