const parseEnv = () => {
    const RSSkeys = Object.keys(process.env).filter((key) =>
        key.startsWith("RSS_")
    );
    const joinedKeys = RSSkeys.map((key) => `${key}=${process.env[key]}`).join(
        "; "
    );
    if (joinedKeys.length) console.log(joinedKeys);
};

parseEnv();
