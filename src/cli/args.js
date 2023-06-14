const parseArgs = () => {
  process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });
};

parseArgs();