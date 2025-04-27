const parseArgs = () => {
    const args = process.argv.slice(2).map((arg, index) => `${arg.slice(2,arg.length)} is value${index + 1 || ''}`).join(', ');
    console.log(args);
};

parseArgs();
