const parseArgs = () => {
    const [execPath, execFile, ...rest] = process.argv;
    let args = [];
    for (let i = 0; i < rest.length; i++) {
        if (i % 2 !== 0) {
            continue;
        }
        args.push(`${rest[i]} is ${rest[i + 1]}`);
    }
    console.log(args.join(', '));
};

parseArgs();
