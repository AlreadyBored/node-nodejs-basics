const parseArgs = () => {
    const args = process.argv.slice(2);
    const result = [];

    for (let i = 0; i < args.length; i += 2) {
        const key = args[i].slice(2);
        const val = args[i + 1];
        const keyValStr = `${key} is ${val}`;

        result.push(keyValStr);
    }

    console.log(result.join(', '))
};

parseArgs();