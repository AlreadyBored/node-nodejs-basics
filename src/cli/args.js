export const parseArgs = () => {
    const args = process.argv.slice(2);
    let isFirstRun = true;

    for (let i = 0; i < args.length; i += 2) {
        if (isFirstRun) {
            isFirstRun = false;
        } else {
            process.stdout.write(', ');
        }

        process.stdout.write(`${args[i].substring(2)} is ${args[i + 1]}`);
    }
};

parseArgs();