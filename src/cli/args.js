const parseArgs = () => {
    const args = process.argv;
    const result = [];

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        if (arg.startsWith('--')) {
            const key = arg.slice(2);
            const value = i + 1 < args.length ? args[i + 1] : '';
            result.push(`${key} is ${value}`);
            i++;
        }
    }

    console.log(result.join(', '));
};

parseArgs();
