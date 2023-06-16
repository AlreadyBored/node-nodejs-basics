const parseArgs = () => {
    const args = process.argv.slice(2);

    const parsedArgs = args.reduce((result, arg, index) => {
        if (arg.startsWith('--') && args[index + 1]) {
            const propName = arg.slice(2);
            const value = args[index + 1];

            result[propName] = value;
        }
        return result;
    }, {});

    for (const [propName, value] of Object.entries(parsedArgs)) {
        console.log(`${propName} is ${value}`);
    }
};

parseArgs();