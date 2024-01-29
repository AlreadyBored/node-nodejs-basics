const parseEnv = () => {
    const envVarsKeys = Object.keys(process.env)
    const RSSEntries = envVarsKeys.filter((key) => key.startsWith('RSS_'))
    const RSSEntriesConsoleString = RSSEntries.map((key => `${key}=${process.env[key]}`)).join('; ')

    console.log(RSSEntriesConsoleString)
};

parseEnv();
