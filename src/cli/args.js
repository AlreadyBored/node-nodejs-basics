import process from "node:process"

export const parseArgs = () => {
    const nameRegExp = /^--/;
    const argv = process.argv.slice(2);
    const args = [];

    while (argv.length > 0) {
        let argName = argv.shift();
        if (nameRegExp.test(argName)) {
            args.push(argName.slice(2) + ' is ' + argv.shift());
        }
    }

    console.log(args.join(', '));
};

parseArgs();