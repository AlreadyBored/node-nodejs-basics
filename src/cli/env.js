import * as ev from 'node:process'

const parseEnv = () => {
    // Write your code here 
    const rSSPreFix = 'RSS_'
    const envVariables = process.env
    const rSSVariables = findPrefix(envVariables, rSSPreFix)
    console.log('Environment variables starting with', rSSPreFix, ':\n', 
        rSSVariables.length > 0 ? print(rSSVariables) : 'RSS variables not present in this session!')
};

function findPrefix(envVariables, preFix) {
    const foundList = [];
    for (const [key, value] of Object.entries(envVariables)) {
        const preFixExist = key.startsWith(preFix);
        if (preFixExist) {
            foundList.push(key + '=' + value);
        };
    }
    return foundList
}

const print = (list) => {
    var toPrint = ''
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        const semiColon = (index < list.length -1 === true) ? '; ' : ''
        toPrint += element + semiColon
    }
    return toPrint
}

parseEnv();

