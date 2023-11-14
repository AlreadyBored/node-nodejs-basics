const parseArgs = () => {

    const args = process.argv.slice(2); //потому что первые 2 элемента это ноды

    const argObject = {};

    for (let i = 0; i < args.length; i += 2) {
        const propName = args[i].replace('--', '');
        const value = args[i + 1];
        argObject[propName] = value
    }

    Object.entries(argObject).map(([key, value]) => console.log(`${key} is ${value}`))
};

parseArgs();