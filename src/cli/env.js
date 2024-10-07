
const parseEnv = () => {
    const envVars = process.env;

    const rssVars = Object.entries(envVars)
        .filter(([key]) => key.startsWith('RSS_'))
        .sort(([a], [b]) => a.localeCompare(b));

    const output = rssVars.map(([key, value]) => `${key}=${value}`).join('; ');

    console.log(output);
};

parseEnv();