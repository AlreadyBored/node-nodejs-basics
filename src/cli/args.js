const parseArgs = () => {
    // Write your code here 
    const result=[];
    const variables = process.argv.slice(2)
    for (let i=0; i<variables.length; i=i+2) {
        if (variables[i+1])result.push(`${variables[i]} is ${variables[i+1]}`)
        else result.push(variables[i]+ ' is undefined')
    }
    console.log(result.join(', '))
};

parseArgs();