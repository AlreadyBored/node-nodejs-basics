const parseArgs = () => {
  const args = process.argv;
  const map = new Map();
  for (let i = 0; i < args.length; i++) {
    let arg = args[i];
    if (arg.startsWith("--")) {
      map.set(arg.slice(2), args[i + 1]);
    }
  }
  map.forEach((value, key) => console.log(`${key} is ${value}`));
};

parseArgs();

//args.js - implement function that parses command
// line arguments (given in format --propName value --prop2Name value2,
// you don't need to validate it) and prints them
//to the console in the format propName is value, prop2Name is value2
