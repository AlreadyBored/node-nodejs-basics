const parseArgs = () => {
    const args = process.argv;
    
    const formattedArgs = [];

    for (let i = 0; i < args.length; i += 2) {
        if (args[i].startsWith('--')) {
            const propName = args[i].slice(2);
            const value = args[i + 1] || '';
            formattedArgs.push(`${propName} is ${value}`);
        }
    }

    if (formattedArgs.length > 0) {
        console.log(formattedArgs.join(', '));
    }
};

parseArgs();