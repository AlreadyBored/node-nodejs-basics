const parseArgs = () => {
    const additionalArgs = process.argv.slice(2);

    additionalArgs.forEach((arg, index) => {
        if (/^--/m.test(arg)) {
            console.log(`${arg.replace('--', '')} is ${additionalArgs[index + 1]}`);
        }
    });
};

parseArgs();
