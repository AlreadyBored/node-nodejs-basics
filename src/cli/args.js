import { argv } from 'node:process';


const parseArgs = () => {
    const args = argv.slice(2);
    const argsCount = args.length / 2;

    const result = new Array(argsCount).fill('').reduce((acc, _current, index) => {
        const isLastKey = index === (argsCount - 1);

        const key = args[index * 2];
        const value = args[index * 2 + 1];

        return acc + `${key} is ${value}${isLastKey ? '' : ', '}`;
    }, '');

    console.log(result);
};

parseArgs();
