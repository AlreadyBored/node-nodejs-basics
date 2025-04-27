import { argv } from 'node:process';

const parseArgs = () => {
    const arArg = [];
    const prefixPropName = new RegExp('^--.+')

    for (let i = 2; i < argv.length; i++) {
        const element = argv[i];
        if (element.match(prefixPropName)) {
            const valLastObj = arArg[arArg.length - 1]?.value;
            if (valLastObj === null) arArg[arArg.length - 1].value = '';
            arArg.push({
                name: element,
                value: null,
            });
        }
        else {
            const valLastObj = arArg[arArg.length - 1]?.value;
            if (valLastObj === null) arArg[arArg.length - 1].value = element;
        }
    }
    if (arArg[arArg.length - 1]?.value === null) arArg[arArg.length - 1].value = '';
    
    let strOut = '';
    arArg.forEach(obj => strOut += `${obj.name} is ${obj.value}, `);
    strOut = strOut.substring(0, strOut.length - 2)
    console.log(strOut)
};

parseArgs();