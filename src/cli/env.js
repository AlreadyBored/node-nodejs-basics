const parseEnv = () => {
    const variables = Object.entries(process.env).filter(([key]) => key.startsWith('RSS_'));
    console.log(variables.map((pair) => pair.join('=')).join('; '));
};

parseEnv();