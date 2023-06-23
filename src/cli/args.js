const parseArgs = () => {
    // Write your code here
    const args = process.argv.slice(2);
    const parsedArgs = {};

    while(args.length > 0) {
        const argName = args.shift().slice(2);
        const argValue = args.shift();
        parsedArgs[argName] = argValue;
    }
    const content = Object.entries(parsedArgs)
        .map(([key, value]) => `${key} is ${value}`)
        .join(", ");

    console.log(content);
};

parseArgs();