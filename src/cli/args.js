import { argv } from 'node:process';

const parseArgs = () => {
    argv.forEach((val, index) => {
        if(val.includes('--')) {
            const newVal = String(val).slice(2)
            console.log(`${newVal} is ${argv[index+1]}, `);
        }
    });
};

parseArgs();