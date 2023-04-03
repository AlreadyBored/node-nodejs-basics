const parseArgs = () => {
    // Write your code here
    const argument = process.argv.slice(2);
  for (let i = 0; i < argument.length; i++) {
    if(i === argument.length - 2){
      process.stdout.write(`${argument[i]} is ${argument[(i += 1)]}`);
      return
    }
    process.stdout.write(`${argument[i]} is ${argument[(i += 1)]}, `);
  }

};

parseArgs();