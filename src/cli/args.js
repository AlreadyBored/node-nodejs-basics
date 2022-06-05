const PREFIX_OF_ARGUMENTS = '--';

export const parseArgs = () => {
    const filteredArgs = process.argv.filter((arg) => !!(~arg.indexOf(PREFIX_OF_ARGUMENTS)) === true);

    filteredArgs.forEach((filteredArg) => {
        const appropriateArgIndex = process.argv.findIndex((consoleArg) => consoleArg === filteredArg);

        console.log(`${process.argv[appropriateArgIndex]} is ${process.argv[appropriateArgIndex + 1]}`);
    });
};

parseArgs();
