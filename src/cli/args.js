const parseArgs = () => {
    const isVariable = (argument) => argument.indexOf('--') === 0 && argument.length > 2;
    const getFormattedResult = (entries) => entries.map(([varName, value]) => `${varName} is ${value}`).join(', ');
    
    const entries = []
    
    process.argv.forEach((argument, index, arr) => isVariable(argument) && entries.push([argument, arr[index + 1]]));
    
    console.log(getFormattedResult(entries));
};

parseArgs();