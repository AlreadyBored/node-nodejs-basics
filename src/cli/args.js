export const parseArgs = () => {
    if (!process.argv.slice(2).length) {
        return console.log('\x1b[31m', `parameters were not passed`, '\x1b[0m');
    }

    process.argv.slice(2).join(' ').split(RegExp('-|--')).forEach((v, i) => {
        if (!v) return;

        const [name, value] = v.split(' ');

        console.log('\x1b[32m', `${name} is ${value}`, '\x1b[0m');
    });
};

parseArgs();
