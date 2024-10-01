const parseArgs = () => {
    const parsedArgs = process.argv.slice(2);
    const output = {};

    for (let i = 0; i < parsedArgs.length; i += 2) {
        const key = parsedArgs[i].replace("--", "");
        const value = parsedArgs[i + 1];
        output[key] = value;
        
    }

    // for (const [key, value] of Object.entries(output)) {
    //     console.log(`${key} is ${value}`);
    // }


    const result = Object.entries(output)
                         .map(([key, value]) => `${key} is ${value}`);
    console.log(result.join(', '));

    
};

parseArgs();