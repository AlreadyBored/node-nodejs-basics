export const parseEnv = () => {
    Object.keys(process.env).forEach((key) => {
        if(key.slice(0, 4) === 'RSS_') {
            console.log(`${key}=${process.env[key]};`)
        }
    })
};
