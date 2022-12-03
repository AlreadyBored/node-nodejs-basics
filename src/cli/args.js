const parseArgs = () => {
    const additionalArgs = process.argv.slice(2);

    for(let i = 0; i < additionalArgs.length; i++) {
        if (!i || i % 2 !== 0) {
            console.log(`${additionalArgs[i]} is ${additionalArgs[i + 1]}`);
        }
    }
};

parseArgs();
