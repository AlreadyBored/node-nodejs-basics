const parseArgs = () => {
    const args = process.argv.slice(2);
    const argsNames = args.filter(arg => arg.startsWith("--"));
    const argsValues = args.filter(arg => !arg.startsWith("--"));
    const res = [];
    for(let i = 0; i < argsNames.length; i++) {
        res.push(`${argsNames[i]} is ${argsValues[i]}`);
    }
    console.log(res.join(", "));
};

parseArgs();