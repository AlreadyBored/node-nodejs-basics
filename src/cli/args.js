const parseArgs = () => {
    const terminalArgs = process.argv.slice(2);
    const terminalArgsObj = {};

    for (let i = 0; i < terminalArgs.length; i += 2) {
        terminalArgsObj[terminalArgs[i].slice(2)] = terminalArgs[i + 1];
    }

    for (let key in terminalArgsObj) {
        console.log(`${key} is ${terminalArgsObj[key]}`);
    }

};

parseArgs();