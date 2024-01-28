const parseArgs = () => {
  const envArgs = process.argv
  const envArgsParsed = envArgs.reduce((acc, arg, index, array) => {
    if (arg.startsWith('--')) {
      acc.push(`${arg.slice(2)} is ${array[index + 1]}`)
    }
    return acc
  }, [])

  console.log(envArgsParsed.join(', '))
};

parseArgs();

// args.js - implement function that parses command line arguments 
// (given in format --propName value --prop2Name value2, you don't need to validate it) and prints them to 
// the console in the format propName is value, prop2Name is value2