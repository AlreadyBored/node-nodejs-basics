const parseArgs = () => {
    const prefix = '--';
    const arr = [];

    for (let i = 2; i < process.argv.length; i++) {
        const value = process.argv[i + 1];

        if (process.argv[i].startsWith(prefix) && value) {
            const name = process.argv[i].substring(prefix.length);

            arr.push(`${name} is ${value}`);
        }
    }

    console.log(arr.join(', '))
};

parseArgs();