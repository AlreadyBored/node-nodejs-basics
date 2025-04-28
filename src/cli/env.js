const searchPart = "RSS_";

const parseEnv = () => {
    const envVariables = process.env;

    const rssVariables = Object.entries(envVariables)
        .filter(([key]) => key.startsWith(searchPart))
        .map(([key, value]) => `${key}=${value}`);

    const result = rssVariables.join("; ");
    console.log(result);
};

parseEnv();