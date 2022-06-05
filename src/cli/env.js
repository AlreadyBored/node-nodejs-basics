export const parseEnv = () => {
    Object.entries(process.env).forEach(([key, value]) => {
        if (key.startsWith('RSS_')) {
            console.log('\x1b[32m', `${key}=${value}`, '\x1b[0m');
        }
    });
};

parseEnv();
