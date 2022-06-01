export const parseArgs = () => {
    const {argv} = process;
    const message = argv
        .filter(arg => arg.startsWith('--'))
        .map(arg => `${arg} is ${argv[argv.indexOf(arg) + 1]}`)
        .join(', ');
    console.log(message);
};

parseArgs();