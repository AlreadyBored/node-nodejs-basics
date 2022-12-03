const { argv, stdout } = process;

const parseArgs = () => {
    const data = argv.slice(2);

    const result = data.map((argument, index) => {
        const value = index % 2 === 0 || index === 0 ? data[index + 1] : null;

        return value ? `${argument} is ${value}` : null;
    }).filter(value => !!value).join(',');

    stdout.write(result + '\n');
};

parseArgs();