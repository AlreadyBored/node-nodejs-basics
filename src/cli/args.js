const parseArgs = () => {
    const args = process.argv.slice(2);

    for(let i = 1; i < args.length; i+=2) {
        console.log(`${args[i-1]} is ${args[i]}`);
    }
};

parseArgs();