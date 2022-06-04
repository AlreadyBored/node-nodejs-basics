import { stdin, stdout } from 'process'

export const parseArgs = () => {
    // Write your code here 
    const PREFIX = '--'
    const args = [...process.argv];
    let res = [];

    while(args.length) {
        const checkedArg = args.splice(0, 2);
        const [propName, value] = checkedArg;
        
        if (propName.startsWith(PREFIX)) {
            const fixedPrpName = propName.slice(2);
            const str = `${fixedPrpName} is ${value}`
            res.push(str);
        }
    }

    stdout.write(res.join(', '));
};

parseArgs();