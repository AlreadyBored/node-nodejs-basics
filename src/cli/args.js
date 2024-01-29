// implement function that parses command line arguments (given in format --propName value --prop2Name value2, you don't need to validate it) and prints them to the console in the format propName is value, prop2Name is value2
const parseArgs = () => {
    const args = process.argv;
    const processedArgs = [];
    for (let i = 0; i < args.length; i += 1) {
        if (args[i].startsWith('--')) {
            const propName = args[i].slice(2);
            processedArgs.push(
                `${propName} is ${args[i + 1]}`
            );
        } 
    }
    processedArgs.length && console.log(processedArgs.join(', '));
};

parseArgs();