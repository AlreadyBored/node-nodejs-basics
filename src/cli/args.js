const parseArgs = () => {
    let args = process.argv.slice(2);
    
    let output = [];
    for (let i = 0; i < args.length; i += 2) {
        output = [...output, args[i].slice(2) + ' is ' + args[i + 1]];
    }
    
    console.log(output.join(', '));
    
};

parseArgs();