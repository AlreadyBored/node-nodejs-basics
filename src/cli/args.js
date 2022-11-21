const parseArgs = () => {
  const myArgs = process.argv.slice(2);
  myArgs.forEach((arg, ind) => {
    if (arg.startsWith("--")) {
      console.log(`${arg.slice(2)} is ${myArgs[ind + 1]}`);
    }
  });
};
// node cli/args.js --agr1 1 --arg2 2 --arg3 'some'
parseArgs();
