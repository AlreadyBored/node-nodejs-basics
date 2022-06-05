import { argv } from 'node:process';

export const parseArgs = () => {
    const args = [...argv].slice(2);

    let printedStr = '';
    args.forEach((arg, i) => {
        printedStr = !!arg.startsWith('--') ? `${arg.slice(2)} is ` : printedStr + arg;

        if (i % 2 !== 0) {
            console.log(printedStr);
            printedStr = '';
        }
    })

};

parseArgs();