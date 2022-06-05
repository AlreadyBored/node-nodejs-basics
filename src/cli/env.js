export const parseEnv = () => {
    // env.js - implement function that parses environment variables with prefix RSS_
    // and prints them to the console in the format RSS_name1=value1; RSS_name2=value2

    const rssEntries = Object.entries(process.env).filter(([key]) => {
        return key.startsWith('RSS_');
    });

    console.log(rssEntries.map(([key, value]) => {
        return `${key}=${value}`;
    }).join('; '));
};

parseEnv();