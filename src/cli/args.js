const parseArgs = () => {
    const variables = process.argv.slice(2);
    const res = [];

    for (let i = 0; i < variables.length; i += 2) {
        res.push(`${variables[i]} is ${variables[i + 1]}`);
    }

    console.log(res.join(', '));
};

parseArgs();