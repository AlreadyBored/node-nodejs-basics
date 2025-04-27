const parseArgs = () => {
    const envArguments = process.argv,
          resultArray = [];
    if(envArguments) {
        envArguments.forEach((argValue, index, envArguments) => {
            if (argValue.startsWith('--')){
                const resultString = `${argValue.split('--')[1]} is ${envArguments[index + 1]}`;
                resultArray.push(resultString);
            }
        });
    
        console.log(resultArray.join(', '));
    } else {
        throw new Error('No environment arguments were found');
    }
    
};

parseArgs();