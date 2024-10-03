const PREFIX = 'RSS_'

const parseEnv = () => {
    const res = Object
        .entries(process.env)
        .reduce((acc, [key, value], index, array) => {
            if (key.startsWith(PREFIX)) {
                const formatted = `${key}=${value}`;
                return [...acc, formatted];
            }
            return acc;
        }, []);

    console.log(res.join('; '));
};

parseEnv();
