import { argv } from 'node:process';

const parseArgs = () => {
    const args = argv.slice(2);
    let result = '';
    for (let i = 0; i < args.length; i += 2) {
        if (i !== 0) result += ', ';
        result += `${args[i].slice(2)} is ${args[i + 1]}`;
    }
    console.log(result);
};

parseArgs();
