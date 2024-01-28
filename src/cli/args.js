const parseArgs = () => {
    const parsedArguments = [];
    const args = process.argv.slice(2);
    const regex = /^--/;
    const argsLength = args.length;

    for (let i = 0; i < argsLength; i += 2) {
        const propertyName = args[i].replace(regex, '');

        parsedArguments.push(`${propertyName} is ${args[i + 1]}`);
    }

    console.log(parsedArguments.join(', '));
};

parseArgs();
