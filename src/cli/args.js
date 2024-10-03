const parseArgs = () => {
  let args = process.argv.slice(2);

  let results = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith("--")) {
      let propName = args[i].slice(2);

      let value = args[i + 1];
      results.push(`${propName} is ${value}`);
      i++;
    }
  }

  console.log(results.join(", "));
};

parseArgs();
