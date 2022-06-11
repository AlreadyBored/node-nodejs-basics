export const parseArgs = () => {
    const startProp = '--';
    const lengthProp = startProp.length;
    const argsArrayFromCli = process.argv.slice(2);
    const args = {};

    argsArrayFromCli.forEach(argFromCli => {
        if (argFromCli.slice(0,lengthProp) === startProp) {
            const [arg, value] = argFromCli.split('=');
            args[arg.slice(lengthProp)] = value;
        }
    });

    return args;
};
