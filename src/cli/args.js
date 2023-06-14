import { argv } from 'node:process';

const parseArgs = () => {
    const cuttedArgv = argv.slice(2);
    const resultArr = cuttedArgv.reduce((acc, key, i ) => {
        if (/^--.+/.test(key)) {
            acc = [...acc, `${key} is ${cuttedArgv[i + 1]}`];
        }

        return acc;
    }, []);

    const resultString = resultArr.join(', ');
    console.log(resultString);
};

parseArgs();
