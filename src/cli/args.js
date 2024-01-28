const parseArgs = () => {
    for (let i = 2; i < process.argv.length; i += 2) {
        const propName = process.argv[i].substring(2);
        const value = process.argv[i + 1];
        console.log(`${propName} is ${value}`);
    }
};

parseArgs();