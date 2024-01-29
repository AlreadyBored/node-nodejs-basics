const parseArgs = () => {
    const args = process.argv.slice(2);

    args.forEach((arg, index) => {
        if (arg.slice(0, 2) === '--') console.log(`${arg.slice(2)} is ${args[index + 1]}`);
    });
};

parseArgs();