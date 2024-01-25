const parseArgs = () => {
    const parsedArgs = {};
    for (let i = 0; i < process.argv.length; i += 2) {
        const propName = process.argv[i].substring(2);
        parsedArgs[propName] = process.argv[i + 1];
    }
    const toPrint = Object.keys(parsedArgs)
        .map((key) => `${key} is ${parsedArgs[key]}`)
        .join(', ');
    console.log(toPrint);
};

parseArgs();
