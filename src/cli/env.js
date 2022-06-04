export const parseEnv = () => {
    let envKeysArr =  Object.keys(process.env).filter(item => item.includes("RSS_"))
    let variables = [];

    for (let key of envKeysArr) {
        variables.push(`${key}=${process.env[key]}`)
    }

    console.log(variables.join(" "))
};
//parseEnv()