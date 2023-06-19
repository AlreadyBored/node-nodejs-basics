const parseArgs = () => {
    process.argv.forEach((arg, index) => {
        if(arg.startsWith('--')) {
            console.log(`${arg.slice(2)} is ${process.argv[index+1]}`);
        }
    })
};

parseArgs();