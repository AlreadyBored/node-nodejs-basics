const parseArgs = () => {
  const args = process.argv.slice(2);
  const list = [];

  for (let i = 0; i<args.length; i+=2) {
    if (args[i]) {
      list.push(`${args[i].replace(/^--/i, "")} is ${args[i+1]}`);
    }
  }

  console.log(list.join(", "));
};

parseArgs();
