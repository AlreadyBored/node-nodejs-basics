const parseArgs = () => {
    // Write your code here 
    const args = process.argv.slice(2);

    let result = '';
    for (let i = 0; i < args.length; i = i + 2) {
      const newName = args[i].slice(2);
      const argString = `${newName} is ${args[i+1]}`;
      result += result.length ? `, ${argString}` : `${argString}`;
    }

    console.log(result);
};

parseArgs();