import process from 'node:process';

const parseEnv = () => {
    for (const [key, value] of Object.entries(process.env)) {
        if (key.startsWith('RSS_')) { console.log(`${key}=${value};`) };
    }
};

parseEnv();