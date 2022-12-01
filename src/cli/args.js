const parseArgs = () => {
    // Write your code here
    // args.js - implement function that parses command line arguments
    // (given in format --propName value --prop2Name value2, you don't need to validate it)
    // and prints them to the console in the format propName is value, prop2Name is value2

    const args = process.argv.slice(2)
    const result = args.map(name => name.startsWith('--') ? name.replace('--', '') + ' is' : name + ',').join(' ')
    console.log(result)
};

parseArgs();