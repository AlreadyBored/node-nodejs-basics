const parseArgs = () => {
  // Write your code here
  const recieveAgrs = process.argv.slice(2);
  const acc = [];
  recieveAgrs.forEach((arg, i, arr) => {
    if (arg.startsWith("--")) {
      const transformArg = arg.slice(2) + " is " + arr[i + 1];
      acc.push(transformArg);
    }
    return acc;
  });
  console.log(acc.join(", "));
};

parseArgs();
