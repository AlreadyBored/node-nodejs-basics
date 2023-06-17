const PREFIX = 'RSS_';

const parseEnv = () => {
    const result = [];
    Object.entries(process.env).forEach(([key, value]) => {
        if (key.startsWith(PREFIX)) result.push(`${key}=${value}`)
    })
    const joinedResult = result.join(", ")
    console.log(joinedResult);
};

parseEnv();