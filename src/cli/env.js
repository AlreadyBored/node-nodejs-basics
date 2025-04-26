import * as ev from 'node:process'

const parseEnv = () => {
    // Write your code here 
    const processorPreFix = 'PROCESSOR_'
    const rSSPreFix = 'RSS_'
    const envVariables = process.env

    const rSSVariables = findPrefix(envVariables, rSSPreFix)
    console.log('Environment variables starting with', rSSPreFix, ':\n', rSSVariables.length > 0 ? print(rSSVariables) : 'RSS variables not present in this session!')

    const processorVaiables = findPrefix(envVariables, processorPreFix)
    console.log('Environment variables starting with', processorPreFix, ':\n', print(processorVaiables))
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
        toPrint += element + '; '
    }
    return toPrint
}

parseEnv();

