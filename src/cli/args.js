    const parseArgs = () => {
        const resArr = [];
        const cliArg = process.argv.slice(2);
        for (let i = 0; i < cliArg.length; i++) {
            if (cliArg[i].includes('--')) {
                resArr.push(cliArg[i].replace('--', '') + ' is ' + cliArg[i + 1]);
            }
        }
        const result = resArr.join(', ');
        console.log(result);
    };

    parseArgs();