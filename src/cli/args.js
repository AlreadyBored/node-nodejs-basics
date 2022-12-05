const parseArgs = () => {
    let args = process.argv;
    for (let i = 0; i < args.length; i += 2) {
        console.log(`${args[i].slice(2)} is ${args[i+1]}`);
    }
};

parseArgs();