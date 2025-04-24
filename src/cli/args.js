const parseArgs = () => {
    const args = process.argv;
    const resultList = [];
    for(let i=2; i<args.length-1; i+=2) {
        resultList.push(`${args[i].replace('--', '')} is ${args[i+1]}`);
    }
    console.log(resultList.join(', '));
};

parseArgs();