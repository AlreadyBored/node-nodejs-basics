export const parseEnv = () => {
    const parsedEnvs = process.argv.slice(2).map((env) => `RSS_${env}`)
    console.log(parsedEnvs)
};

parseEnv()