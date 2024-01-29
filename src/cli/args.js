const parseArgs = (argv) => {
    let args = process.argv.slice(2); // Skip the first two arguments (node and script name)
    let result = [];

    for (let i = 0; i < args.length; i += 2) {
        let key = args[i].replace('--', '');
        let value = args[i + 1];
        result.push(`${key} is ${value}`);
    }

    console.log(result.join(', '));
};

parseArgs();