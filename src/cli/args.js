const parseArgs = () => {
    const cliArgs = process.argv.slice(2);
    const args = {};
    for (let i = 0; i < cliArgs.length; i += 2) {
        const argName = cliArgs[i].replace('--', '');
        const argValue = cliArgs[i + 1];
        args[argName] = argValue;
    }
    for (const [key, value] of Object.entries(args)) {
        console.log(`${key} is ${value}`);
    }
};

parseArgs();