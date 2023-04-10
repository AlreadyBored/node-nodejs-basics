import { argv, stdout } from 'process';

const parseArgs = () => {
    const args = argv.slice(2);
    const toString = args.reduce((acc, arg, i) => i % 2 === 0 ? acc.concat(arg.slice(2), ' is ') : acc.concat(arg, '\n'), '');
    
    stdout.write(toString);
};

parseArgs();