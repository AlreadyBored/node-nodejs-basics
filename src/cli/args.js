const parseArgs = () => {
    // Write your code here 
    const args = process.argv.slice(2); 

    const result = [];

    for (let i = 0; i < args.length; i += 2) {
        const propName = args[i].replace('--', ''); 
        const propValue = args[i + 1]; 
        result.push(`${propName} is ${propValue}`);
    }

    console.log(result.join(', '));
};

parseArgs();