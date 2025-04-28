const parseArgs = () => {
  const args = process.argv.slice(2);

  for (let i = 0, len = args.length; i < len; i++) {
      if(args[i].startsWith("--")) {
        console.log(args[i].slice(2) + ' is ' + args[i + 1]);
      }
  }
};

parseArgs();

// args.js - implement function that parses command line arguments (given in format --propName value --prop2Name value2, you don't need to validate it) and prints them to the console in the format propName is value, prop2Name is value2