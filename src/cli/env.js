export const parseEnv = () => {
    const envs = process.env;
    printEnv(envs);
};

const printEnv = (envs) => {
    for (const key in envs) {
        if(key.startsWith('RSS_')) {
            process.stdout.write(`${key}: ${envs[key]}; `);
        }
    }
    console.log();
};

parseEnv();