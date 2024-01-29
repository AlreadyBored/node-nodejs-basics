import pr from 'node:process';

const envVariables = pr.env;
const prefixToCheck = "RSS_";

const parseEnv = () => {
    let varsToPrint = [];

    for (let key in envVariables) {
        if (key.startsWith(prefixToCheck)) {
            varsToPrint.push(`${key}=${envVariables[key]}`)
        }
    }

    varsToPrint = varsToPrint.join('; ');
    console.log(varsToPrint);
};

parseEnv();