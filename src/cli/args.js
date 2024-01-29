const parseArgs = () => {
    const args = {};

    process.argv.forEach((val, key) => {
        if (val.includes('--')) {
            args[val.slice(2)] = process.argv[key + 1];
        }
    });

    const res = Object.keys(args).map((key) => `${key} is ${args[key]}`);

    console.log(res.join(', '));
};

parseArgs();
