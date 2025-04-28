const PREFIX = '--';

const parseArgs = () => {
    const result = [];

    process.argv.forEach((arg, index) => {
        if (arg.startsWith(PREFIX)) {
            const string = `${arg.slice(PREFIX.length)} is ${process.argv[index+1]}`;

            result.push(string);
        }
    })

    console.log(result.join(', '));
};

parseArgs();
