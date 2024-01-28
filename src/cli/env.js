const parseEnv = () => {
    const envVarsKeys = Object.keys(process.env)
    const RSSEntries = envVarsKeys.filter((key) => key.startsWith('RSS_'))
    const RSSEntriesConsoleString = RSSEntries.map((key => `${key}=${process.env[key]}`)).join('; ')

    console.log(RSSEntriesConsoleString)
};

parseEnv();

// env.js - implement function that parses environment variables with prefix RSS_ and prints them to the 
// console in the format RSS_name1=value1; RSS_name2=value2