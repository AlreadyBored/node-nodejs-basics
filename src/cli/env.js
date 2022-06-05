const allEnvVariables = process.env

export const parseEnv = () => {
    let message = ``
    for (let item of Object.keys(allEnvVariables)) {
        item.startsWith("RSS_") ? message += `${item}=${allEnvVariables[item]}; ` : "pass"
    };
    return console.log(message)
};
parseEnv()