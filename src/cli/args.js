/*
implement function that parses command line arguments 
(given in format --propName value --prop2Name value2, you don't need to validate it) 
and prints them to the console in the format propName is value, prop2Name is value2

--prop_EEE=33 --propdddd=33333 RSS_RRRR=2324 node args.js
*/

const parseArgs = () => {
    const PREFIX = "--";

    const res = process.argv.reduce((acc, value, index, array) => {
        if (value.startsWith(PREFIX)) {
            return [...acc, `${value} is ${array[index + 1]}`];
        }
        return acc;
    }, []).join(', ');

    console.log(res);
};

parseArgs();