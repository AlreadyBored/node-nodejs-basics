const parseArgs = () => {
    const entries = process.argv.slice(2).reduce((acc, arg) => {
        arg.startsWith('--')
            ? acc.push(arg.slice(2))
            : acc.push(`${acc.pop()} is ${arg}`);
        return acc;
    }, []);
    console.log(entries.join(', '));
};

parseArgs();