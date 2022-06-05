export const parseArgs = () => {
    const args = process.argv.slice(2);

    const resultString = []
    for (let i = 0; i <= args.length - 1; i++) {
        if (args[i].startsWith('--')) {
            resultString.push(args[i].slice(2) + ' is ' + args[i + 1])
        }
    }

    console.log(resultString.join(', '))
};

parseArgs()