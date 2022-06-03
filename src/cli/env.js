export const parseEnv = () => {
    let result = [];
    for (const key in process.env) {
        key.match(/^RSS_/) && result.push(`${key}=${process.env[key]}`)
    }
    console.log(result.join('; '));
};