export const parseArgs = () => {
    const argsWithValues = process.argv.reduce((acc, curr, idx) => {
        if (curr.startsWith('--')) {
            const arg = [curr.slice(2)];
            const nextArg = process.argv[idx + 1];

            if (!nextArg.startsWith('--')) {
                arg.push(nextArg);
            }

            return [...acc, arg.join(' is ')];
        }
        return acc;
    }, []);

    console.log(argsWithValues.join(', '));
};

parseArgs();