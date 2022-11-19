import {argv} from 'node:process';

const parseArgs = () => {
    // Write your code here
    let res = ''
    const args = process.argv
    for (let i = 2; i < args.length; i += 2) {
        res += args[i] + ' is ' + args[i + 1] + (((i + 2) !== args.length) ? ', ' : '')
    }
    console.log(res)
};

parseArgs();