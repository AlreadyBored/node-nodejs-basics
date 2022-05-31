import process from "node:process"

export const parseEnv = () => {
    const regExp = /^RSS_/;
    const envVars = process.env;
    const vars = [];

    for(let varName in envVars) {
        if (regExp.test(varName) && envVars.hasOwnProperty(varName)) {
            vars.push(varName + '=' + envVars[varName] + ';');
        }
    }

    console.log(vars.join(' '));
};

parseEnv()