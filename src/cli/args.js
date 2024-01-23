// Implement function that parses command line arguments (given in format --propName value --prop2Name value2, you don't need to validate it) and prints them to the console in the format propName is value, prop2Name is value2
const parseArgs = () => {
  const cliArgs = process.argv.slice(2);
  let result = "";

  cliArgs.forEach((it, index) => {
    result += index % 2 === 0 ? `${it} is ` : `${it}, `;
  });
  result = result.trim();
  result.endsWith(",") ? console.log(result.slice(0, -1)) : console.log(result);
};

parseArgs();
