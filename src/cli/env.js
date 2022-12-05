const parseEnv = () => {
    const result = [];

    for (let i in process.env) {
        if (i.startsWith('RSS')) {
            result.push(`${i}=${process.env[i]}`);
        }
    }

    console.log(result.join('; '));
};

parseEnv();