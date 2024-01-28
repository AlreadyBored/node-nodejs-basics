const parseArgs = () => {
    const listOfArgv = process.argv.slice(2);
    const arrayWithArgs = [];

    for (let i = 0; i < listOfArgv.length; i++) {
        if (listOfArgv[i].startsWith('--')) {
            arrayWithArgs.push(`${listOfArgv[i].replace('--', '')} is ${listOfArgv[i + 1]}`);
            i++;
        }
    }

    console.log(arrayWithArgs);
};

parseArgs();