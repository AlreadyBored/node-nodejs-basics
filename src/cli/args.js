
const parseArgs = () => {
    // Write your code here
    //console.log(process.argv.slice(2));
    const args = process.argv.slice(2); //to remove path to the Node.js executable and the path to the script file
    for (let i = 0; i < args.length; i += 2) {
    const propName = args[i].slice(2); //to remove -- before propName
    const value = args[i + 1];
    console.log(`${propName} is ${value}`);
  }
};

parseArgs();