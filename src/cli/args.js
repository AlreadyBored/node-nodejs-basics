import { argv } from 'node:process';

const parseArgs = () => {
    const args = argv.slice(2)

    args.forEach((value, index, array) => {
        if (value.startsWith('--')) {
            console.log(`${value.slice(2)} is ${array[index + 1]}`)
        }
    })
};

parseArgs();