const parseArgs = () => {
    const args = process.argv.slice(2);

    const parsedArgs = {};

    for (let i = 0; i < args.length; i += 2) {
        const key = args[i].replace(/^--/, '');
        const value = args[i + 1];
        parsedArgs[key] = value;
    }

    const output = Object.entries(parsedArgs)
        .map(([key, value]) => `${key} is ${value}`)
        .join(', ');

    console.log(output);
};

parseArgs();