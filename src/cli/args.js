const parseArgs = () => {
    const args = process.argv;
    const result = [];

    for(let i = 0; i < args.length; i += 2) {
        if (args[i].startsWith('--')) {
            const key = args[i].slice(2);
            
            result.push(`${key} is ${args[i + 1]}`)
        }
    }

    console.log(result.join(', '))
};

parseArgs();