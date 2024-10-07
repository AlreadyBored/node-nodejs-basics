const parseArgs = () => {
    // Write your code here 
    // Get the command line arguments
    const args = process.argv.slice(2);
    let result = [];
    // Print the arguments
    let i= 0;
    for (const arg of args) {
        if(arg.startsWith('--')) {
            result.push(arg.slice(2) + ' is ' + args[i+1]);
        }
        i++;
    }
    console.log(result.join(', '));
};

parseArgs();