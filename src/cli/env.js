export const parseEnv = () => {
    const variables = process.env;
    for (let key in variables) {
       if (key.match(/^RSS_/)) {
        console.log(`${key}=${variables[key]}`);
       }
    }
};

parseEnv();