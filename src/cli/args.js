const parseArgs = () => {
    const args = process.argv;

    const argsArray = [];

    args.forEach((value, index) => {
        if (value.startsWith('--')) {
            argsArray.push(`${value.substring(2)} is ${args[index + 1]}`);
        }
    });

    console.log(argsArray.join(', '));
};

parseArgs();
