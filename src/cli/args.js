import { argv } from "node:process";

const parseArgs = () => {
  //index 0: node.exe
  //index 1: src\cli\args.js
  argv.splice(0, 2);

  const argvStrings = extractArgs(argv);
  const resultString = argvStrings.join(", ");

  console.log(resultString);
};

/** accepts arrays of arguments (string[]) and extracts key-value pairs
 * @returns new arrays of strings in format: '<key> is <value>'
 */
const extractArgs = (argv) => {
  const argKeyPrefix = "--";
  //array of strings, each item represents each pair of <arg key, arg value>
  const result = [];

  argv.forEach((str, index) => {
    if (str.startsWith(argKeyPrefix)) {
      const key = str.slice(argKeyPrefix.length, str.length);
      result.push(`${key} is ${argv[index + 1]}`);
    }
  });

  return result;
};

parseArgs();
