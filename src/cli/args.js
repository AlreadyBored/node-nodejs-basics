const parseArgs = () => {
    const raw = process.argv.slice(2);

    const result = [];
    for (let i = 0; i < raw.length; i += 2) {
        const key = raw[i].replace(/^--/, '');
        const value = raw[i + 1];

        result.push(`${key} is ${value}`);
    }

    console.log(result.join(', '));
};

parseArgs();
