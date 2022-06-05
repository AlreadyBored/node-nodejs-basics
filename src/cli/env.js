export const parseEnv = () => {
    for (let key in process.env) {
        if (key.indexOf('RSS_', 0) > -1) {
            process.stdout.write(key + '=' + process.env[key].trimRight() + '; ');
        }
    }
};

await parseEnv();