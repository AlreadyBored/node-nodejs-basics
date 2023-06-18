const parseArgs = () => {
    // Write your code here

    // Get arguments
    const propArguments = process.argv

    // Check if argument starts with -- and if so log it and its next arguments, which in this case is the value
    propArguments.forEach((arg, index) => {
        if (arg.startsWith('--')) {
            console.log(`${arg.substring(2, arg.length)} is ${propArguments?.[index+1]}`)
        }
    })
};

parseArgs();