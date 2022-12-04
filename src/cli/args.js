const parseArgs = () => {
  // Write your code here
  const recieveAgrs = process.argv.slice(2);
  console.log(recieveAgrs);
  recieveAgrs.forEach((arg) => {
    if (arg.startsWith("--")) {
      const transformArg = arg.slice(2);
    }
  });
};

parseArgs();
