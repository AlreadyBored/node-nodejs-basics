const parseArgs = () => {
    const args = process.argv.slice(2);

    args.forEach((arg, index) => {
        if (arg.startsWith('--')) {
            const propName = arg.slice(2);
            const propValue = args[index + 1];

            if (propName && propValue) {
                console.log(`${propName} is ${propValue}`);
            }
        }
    });
};

parseArgs();
