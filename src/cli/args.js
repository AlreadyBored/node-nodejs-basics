const parseArgs = () => {
    process.argv.forEach((arg, index) => {
       if (arg.substring(0, 2) === '--') {
           process.stdout.write(`${arg} is ${process.argv[index + 1]}, `)
       }
    })
};

parseArgs();