const KEY_REGEXP = /--(\w+)/;
const SEPARATOR = ', ';

export const parseArgs = () => {
    // args.js - implement function that parses command line arguments
    // (given in format --propName value --prop2Name value2, you don't need to validate it)
    // and prints them to the console in the format propName is value, prop2Name is value2
    const output = process.argv.slice(2).reduce((previous, arg) => {
        const result = KEY_REGEXP.exec(arg);

        if (result) {
            const [, key] = result;

            if (previous) {
                return `${previous}${SEPARATOR}${key}`;
            }
            return key;
        }
        return `${previous} is ${arg}`;
    }, '');

    console.log(output);
};

parseArgs();