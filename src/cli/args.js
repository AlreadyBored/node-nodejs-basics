import { argv } from 'process';

export const parseArgs = () => {
    const properArgs = argv.slice(2);

    for (let i = 0; i < properArgs.length; i = i + 2) {
        console.log(`${properArgs[i]} is ${properArgs[i + 1]}`)
    }
};
