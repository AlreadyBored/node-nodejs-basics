const parseArgs = () => {
    const args = process.argv.slice(3);
    console.log(args);
    console.log(process.argv);
    const properties = {};

    for (let i = 0; i < args.length; i += 2) {
        const propName = args[i].replace(/^--/, '');
        const propValue = args[i + 1];
        properties[propName] = propValue;
    }

    for (const propName in properties) {
        const propValue = properties[propName];
        console.log(`${propName} is ${propValue}`);
    }
};

parseArgs();