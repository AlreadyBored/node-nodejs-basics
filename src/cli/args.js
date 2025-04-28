const parseArgs = () => {
    // Write your code here
    const args = process.argv.slice(2);
    for (let i = 0; i < args.length; i = i + 2) {
        console.log(`${args[i].replace('--', '')} is ${args[i + 1]}`);
    }
};

parseArgs();