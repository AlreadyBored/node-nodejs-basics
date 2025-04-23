const parseArgs = () => {
    let parsedArgs = "";
    let args = process.argv.slice(2);
    for (let i = 0; i < args.length; i++) {
        if (args[i].includes("--")) {
            parsedArgs += args[i] + " is ";
        } else {
            parsedArgs += args[i];
            if (args[i] !== args[args.length - 1]) {
                parsedArgs += ", ";
            }
        }
    }
    console.log(parsedArgs);
};

parseArgs();
