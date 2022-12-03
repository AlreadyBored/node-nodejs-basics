const parseArgs = () => {
    // Write your code here
    const stringArgs = getArgs(process.argv);
    console.log(stringArgs)
};

const getArgs = (args) => {
    const resultArgs = [];
    const [,, ...rest] = args;
    rest.forEach((value, index, arr) => {
        if(value.charAt(0) === '-' && value.charAt(1) === '-') {
            if(arr[index + 1].charAt(0) !== '-') {
                resultArgs.push(
                    `${value.slice(2)} is ${arr[index + 1]}`
                )
            }
        }
    })
    return resultArgs.join(', ');
}

parseArgs();