const parseArgs = (args) => {
    const parsedArgs = args.reduce((acc, arg, index, arr) => {
        if (index % 2 === 0) {
            const propName = arg.slice(2);
            const propValue = arr[index + 1];
            acc[propName] = propValue;
        }
        return acc;
    }, {});

    for (const [propName, propValue] of Object.entries(parsedArgs)) {
        console.log(`${propName} is ${propValue}`);
    }
    return parsedArgs;
};

const args = process.argv.slice(2);

parseArgs(args);

// when running: node src/cli/args.js --arg1 value1 --arg2 value2
//outputs: 
// arg1 is value1
// arg2 is value2