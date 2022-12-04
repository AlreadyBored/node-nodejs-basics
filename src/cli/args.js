// args.js - implement function that parses command line arguments
// (given in format --propName value --prop2Name value2, you don't need to validate it)
// and prints them to the console in the format propName is value, prop2Name is value2

const args = process.argv.slice(2);

const parseArgs = () => {
  // Write your code here

  const argsWithValues = args.reduce((acc, val) => {
    if (val.startsWith("--")) {
      acc.push([val]);
    } else {
      const lastKey = acc[acc.length - 1];

      lastKey.push(val);
    }

    return acc;
  }, []);

  for (const [arg, value] of argsWithValues) {
    console.log(`${arg} ${value}`);
  }
};

parseArgs();
