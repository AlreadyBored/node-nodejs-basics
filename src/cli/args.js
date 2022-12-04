import { argv } from 'node:process';

const parseArgs = () => {
    const argsArray = [];

    argv.forEach((val, index) => {
        if(index > 1 && index % 2 == 0)
        argsArray.push(`${val} is ${argv[index+1]}`)
    });

    console.log(argsArray.join(', '));
};

parseArgs();