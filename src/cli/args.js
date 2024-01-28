const parseArgs = () => {
    const args = process.argv.slice(2);
    const res = [];

    for (let i = 0; i < args.length; i += 2) {
        if (args[i].startsWith('--')) {
            res.push(`${args[i].slice(2)} is ${args[i + 1]}`);
        }
    }
    console.log(res.join(', '))
};

parseArgs();