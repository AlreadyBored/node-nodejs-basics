const parseArgs = () => {
    const args = process.argv.slice(2);
    const pairs = [];
    for (let i = 0; i < args.length; i += 2) {
        const prop = args[i].substring(2);
        const value = args[i + 1];
        pairs.push(`${prop} is ${value}`);
    }
    console.log(pairs.join(', '));
};

parseArgs();