const parseArgs = () => {
    const inputArgs = process.argv.slice(2);

    const argsObj = {};

    for (let i = 0; i < inputArgs.length; i++) {
        if (inputArgs[i].startsWith('--')) {
            const propName = inputArgs[i].slice(2);
            if (i + 1 < inputArgs.length && !inputArgs[i + 1].startsWith('--')) {
                argsObj[propName] = inputArgs[i + 1];
                i++;
            }
        }
    }

    const output = Object.entries(argsObj)
        .map(([key, value]) => `${key} is ${value}`)
        .join(', ');

    console.log(output);
};

parseArgs();
