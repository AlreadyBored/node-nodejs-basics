const parseArgs = () => {
    const variables = process.argv.slice(2);
    let result = [];
    for (let i = 0; i < variables.length; i += 2) {
        const key = variables[i].replace('--', '');
        const value = variables[i + 1];
        result.push(`${key} is ${value}`);  
    }
    console.log(result.join(', '));
};

parseArgs();
