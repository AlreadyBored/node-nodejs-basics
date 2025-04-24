const PREFIX = "RSS_"

const parseEnv = () => {
    const filtered = Object.entries(process.env)
        .filter(([key]) => key.startsWith(PREFIX))
        .map(([key, value]) => `${key} = ${value}`)
    console.log(filtered.join('; '));
};

parseEnv();