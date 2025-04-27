import { argv } from 'process';

const parseArgs = () => {
    const parsedArgs = [];
    for (let i = 2; i < argv.length; i += 2) {
        parsedArgs.push(`${argv[i].replace('--', '')} is ${argv[i + 1]}`);
    }
    console.log(parsedArgs.join(', '));
};

parseArgs();
