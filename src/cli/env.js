export const parseEnv = () => {
    process.env.RSS_test = 'test';
    process.env.RSS_APP = 'app';
    const allEnvVariables = process.env;
    for (const rss in allEnvVariables) {
        if (rss.startsWith('RSS_', 0)) {
            console.log(`${rss}=${allEnvVariables[rss]}`);
        }
    }
};

parseEnv();
