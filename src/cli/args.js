const parseArgs = () => {
    const args = process.argv.slice(2)
    const parsedArgs = {}
    for (let i = 0; i < args.length; i++) {
        if(args[i].startsWith('--')){
            parsedArgs[args[i].slice(2)] = args[++i]
        }
    }
    Object.entries(parsedArgs).forEach(([key,value]) => {
        console.log(`${key} is ${value}`);
    })
};

parseArgs();