const parseEnv = () => {
    const regex = /^RSS_/;
    const envKeys = Object.keys(process.env);

    const RSS_keys = envKeys.filter((envKey) => envKey.match(regex));

    const parsedEnv = RSS_keys
        .map((RSS_key) => RSS_key + '=' + process.env[RSS_key])
        .join('; ');

    console.log(parsedEnv);
};

parseEnv();