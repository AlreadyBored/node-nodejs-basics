const parseArgs = () => {
    const argIndex = 2;
    const dashesIndex = 2;

    const cliArgsInitial = process.argv;
    const cliArgsFinal = [];

    for (let i = argIndex; i < cliArgsInitial.length; i++) {
        cliArgsFinal.push(`${cliArgsInitial[i].slice(dashesIndex)} is ${cliArgsInitial[++i]}`);
    }

    console.log(cliArgsFinal.join(', '));
};

parseArgs();