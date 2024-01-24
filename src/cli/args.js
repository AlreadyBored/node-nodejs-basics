const parseArgs = () => {
    const [, ,...args] = process.argv;
    const parsedArgs = {}

    for(let i = 0; i < args.length; i+=2){
        const argName = args[i].slice(2)
        const argValue = args[i+1] 
        parsedArgs[argName] = argValue;
    }

    const stringArgs = Object.entries(parsedArgs).map(([name, value]) => `${name} is ${value}`).join(', ');

    console.log(stringArgs);
};

parseArgs();