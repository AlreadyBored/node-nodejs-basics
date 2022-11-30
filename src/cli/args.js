const parseArgs = () => {
    let output = "";

    for (let variable of process.argv) {
       variable.slice(0,2) === "--" ? 
       output += `${variable.slice(2)} is ${process.argv[process.argv.indexOf(variable) + 1]}, ` :
       variable;
    }
    console.log(output);
};

parseArgs();