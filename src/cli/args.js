const parseArgs = () => {
    const args = process.argv;
    const result = args.filter((_,ndx) => ndx % 2 === 0).map((arg,ndx) => `${arg.slice(2)} is ${args[ndx * 2 + 1]}`).join(', ');
    console.log(result);
};

parseArgs();