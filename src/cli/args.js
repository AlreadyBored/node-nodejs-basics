import process from 'node:process';

const parseArgs = () => {
    // console.log('process.argv = ', process.argv);
    const argsArray = process.argv.slice(2);
    argsArray.forEach((arg, index) => {
        if (index % 2 === 0) {
            const propName = arg.slice(2);
            const value = argsArray[index + 1];
            console.log(`${propName} is ${value}`);
        }
    });
};

parseArgs();