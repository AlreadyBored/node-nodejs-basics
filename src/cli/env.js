import process from 'process'
const parseEnv = () => {
    // Write your code here
    const result = [];
    for (const i in process.env) {
        if (i.startsWith('RSS_')) {
            result[i] += process.env[i];
        }
    }
    console.log(result);
};

parseEnv();