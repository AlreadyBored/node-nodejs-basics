import process from "process";

const parseArgs = () => {
    let argv = process.argv;
    let result = "";

    argv.forEach( (arg, index) => {
        let prefix = arg.slice(0, 2);
        if(prefix === "--") result += `${arg.slice(2)} is ${argv[index+1]}, `;
    });

    console.log(result);
};

parseArgs();