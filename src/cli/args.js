const parseArgs = () => {
    //console.log(process.argv);
    const argv = process.argv;

    const result = [];

    for (let index = 2; index < argv.length; index+=2) {
        const argName = argv[index].replace('--', '');
        const value = argv[index + 1];
        result.push(`${argName} is ${value}, `);
    }

    console.log(result.join(''));
};

parseArgs();