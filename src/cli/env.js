const parseEnv = () => {
    const variables = Object.entries(process.env).reduce((acc, variable) => {
        const [key, value] = variable;

        if (key.startsWith('RSS_')) {
            acc.push(`${key}=${value}`);
        }
        return acc;
    }, []);

    console.log(variables.join('; '));
};

parseEnv();