const parseArgs = () => {
    // Write your code here 
    const result = process.argv.reduce((acc, cur, index) => {
        if (cur.indexOf('--') === 0 && process.argv?.[index+1]) {
            return `${acc} ${cur.slice(2)} is ${process.argv[index+1]},`;
        }
        return acc
    }, '')
    console.log(result.slice(1, -1))
};

parseArgs();