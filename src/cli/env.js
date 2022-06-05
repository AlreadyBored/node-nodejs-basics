
export const parseEnv = () => {
    for(let value in process.env) {
        if(value.includes('RSS_')) {
            console.log(`${value}=${process.env[value]};`)
        }
    }
};
parseEnv();