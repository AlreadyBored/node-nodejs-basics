import { argv } from 'node:process'

const parseArgs = () => {
    const argsArr = argv.slice(2);
    const result = [];

    for (let i = 0; i < argsArr.length; i += 2) {
        const key = argsArr[i];
        if (key.startsWith('--')) {
            result.push(`${key.slice(2)} is ${argsArr[i + 1]}`);
        } else {
            result.push(`${key} is ${argsArr[i + 1]}`);
        }
    }

    console.log(result.join(', '));
};

parseArgs();