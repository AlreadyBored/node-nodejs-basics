const parseArgs = () => {
    // Write your code here 

    const args = process.argv.slice(2);
    const result = [];
    args.forEach((arg, index) => {
        if(arg.startsWith('--')) {
            // console.log(`${arg.slice(2)}: ${args[index + 1]}`);
            result.push(`${arg.slice(2)}: ${args[index + 1]}`);
        }
    });

    console.log(result.join(', '));
};

parseArgs();