import process from 'node:process';
const parseArgs = () => {
  const argsDetails = process.argv;
  let arrWithoutComma = [];
  argsDetails.forEach(
      (arg, index) => {
        if (arg.startsWith('--')) {
          arrWithoutComma.push([arg.replace('--', '') + " is " + argsDetails[index+1]]);
        }
      }
  )
  console.log(arrWithoutComma.join(', '))
};

parseArgs();
/*
 implement function that parses command line arguments
  (given in format --propName value --prop2Name value2,
   you don't need to validate it) and prints them to the console
    in the format propName is value, prop2Name is value2
* */
