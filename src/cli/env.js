export const parseEnv = () => {
    let isFirstRun = true;

    for(const [key, value] of Object.entries(process.env)) {
        if(key.startsWith('RSS_')){
            if (isFirstRun) {
                isFirstRun = false;
            } else {
                process.stdout.write('; ')
            }

            process.stdout.write(`${key}=${value}`);
        }
    }
};

parseEnv();