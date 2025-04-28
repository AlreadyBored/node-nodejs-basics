const parseArgs = () => {
    const args = process.argv.slice(2);
    const result = args
        .map((arg) => arg
            .replace(/^--/, '')
            .replace('=', ' is '))
        .join(', ');

    console.log(result.join(', '));
};

parseArgs();
