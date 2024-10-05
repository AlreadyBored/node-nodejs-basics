const parseArgs = () => {
    const arg = process.argv.slice(2);
    for (let i = 0; i < arg.length; i = i + 2) {
        if (arg[i].includes('--')) {
            console.log(`${arg[i].replace('--', '')} is ${arg[i + 1]}`)
        }
    }

};

parseArgs();
