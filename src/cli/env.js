const env_variables = process.env;

const result = [];

const parseEnv = () => {
    for (const key in env_variables) {
        if (key.startsWith("RSS_")) {
            result.push(`${key}: ${env_variables[key]}`);
        }
    }
    console.log(result);
    return result;
};

parseEnv();