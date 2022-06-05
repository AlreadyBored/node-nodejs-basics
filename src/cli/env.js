export const parseEnv = () => {
    const result = [];
    Object.keys(process.env).forEach(element => {
        if (element.startsWith('RSS_')) {
            result.push(element + '=' + process.env[element]);
        }
    });
    console.log(result.join('; '));
};

await parseEnv();