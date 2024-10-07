const parseArgs = () => {
  // Write your code here
  const args = process.argv.slice(2);
  args.forEach((item, i, array) => {
    if (i == 0 || i % 2 == 0) {
      console.log(`${item} is ${array[i + 1]}`);
    }
  });
};

parseArgs();
