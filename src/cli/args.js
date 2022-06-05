export const parseArgs = () => {
    // Write your code here 
    const args = process.argv.slice(2);
    let output = "";
    const argsForPrint = args.map( (arg, ind) => ind % 2 === 0 ? arg.slice(2) : arg);
    for(let i = 0; i < argsForPrint.length; i += 2) {
        if(i != 0) { output += ', '; }
        output += argsForPrint[i] + ' is ' + argsForPrint[i+1];
    }    
    console.log(output);
};


parseArgs();