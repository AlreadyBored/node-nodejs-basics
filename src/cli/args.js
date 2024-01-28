//  implement function that parses command line arguments (given in format --propName value --prop2Name value2, you don't need to validate it) and prints them to the console in the format propName is value, prop2Name is value2

const parseArgs = () => {
  // Starting from the third argument
  for (let i = 2; i < process.argv.length; i += 2) {
    // Assuming the format is always --propName value
    const propName = process.argv[i].slice(2); // Remove '--' prefix
    const value = process.argv[i + 1];

    console.log(`${propName} is ${value}`);
  }
};

parseArgs();
