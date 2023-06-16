const parseArgs = () => {
  // Write your code here
  const args = [...process.argv];
  args.splice(0, 2);
  console.log(args);
  for (let i = 0; i < args.length - 1; i += 2) {
    const propName = args[i].replace(/^--/, "");
    const value = args[i + 1];
    console.log(`${propName} is ${value}`);
  }
};

parseArgs();
