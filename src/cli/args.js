const parseArgs = () => {
    let args;
    const processArgs = process.argv;
    for (let arg of processArgs) {
        if (arg.substring(0, 2) == '--') {
            const nameValue = arg.split("=");
            args = args ? `${args}, ${nameValue[0]} is ${nameValue[1]}` : `${nameValue[0]} is ${nameValue[1]}`;
        }
    }
    console.log(process.argv);
    console.log(args);
};

parseArgs();