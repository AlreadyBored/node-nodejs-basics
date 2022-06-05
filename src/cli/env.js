export const parseEnv = () => {
    let env = process.env;
    for (let value in env) {
        if (value.startsWith('RSS_')) {
            console.log(`${value}=${env[value]}`)
        } else {
            return null
        }
    }
};

