const parseArgs = () => {
  // Write your code here
  const args = process.argv;

  const specArgs = [];
  let prev = false;
  let prevName = "";

  args.forEach((elem, i) => {
    if (prev && !elem.startsWith("--")) {
      specArgs.push(`${prevName} is ${elem}`);
      prev = false;
      prevName = "";
    } else if (elem.startsWith("--")) {
      prev = true;
      prevName = elem.slice(2);
    }
  });

  console.log(specArgs.join(", "));
};

parseArgs();
