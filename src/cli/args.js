const parseArgs = () => {
    const params = [];
    process.argv.slice(2).forEach((param, index, all) => {
        if (param.startsWith('--')) {
            params.push(`${param.substring(2)} is ${all[index+1]}`);
        }
    });

    console.log(params.join(', '));
};

parseArgs();