const parseArgs = () => {
    const args = process.argv.slice(2);

    const parsedArgs = args.reduce((accumulator, currentArg, index) =>
        (index % 2)
            ? accumulator + ' is ' + currentArg + ', '
            : accumulator + currentArg.slice(2)
    ).slice(2, -2);

    console.log(parsedArgs)
};

parseArgs();