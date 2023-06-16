/*
implement function that parses command line arguments 
(given in format --propName value --prop2Name value2, you don't need to validate it) 
and prints them to the console in the format propName is value, prop2Name is value2

--prop_EEE=33 --propdddd=33333 RSS_RRRR=2324 node args.js
*/

const parseArgs = () => {
    const PREFIX = "--";
    const res = [];
    for (const v in process.env) {
        if (v.startsWith(PREFIX)) {
            res.push(`${v} is ${process.env[v]}`);
        };
    }
    console.log(res.join(", "));
};

parseArgs();