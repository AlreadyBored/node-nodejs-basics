export const parseArgs = () => {
    const [_exec, _script, ...argv] = process.argv;

    const substrings = [];
    for(let i = 0; i < argv.length; i += 2) {
        const name = argv[i];
        const value = argv[i + 1];

        substrings.push(`${name.slice(2)} is ${value}`);
    }
    const result = substrings.join(', ');
    console.log(result);
};

parseArgs();