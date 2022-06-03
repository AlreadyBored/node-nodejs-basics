export const parseArgs = () => {
  for (let i = 2; i < process.argv.length-1; i=i+2) {
    console.log(`${process.argv[i]} = ${process.argv[i + 1]}`);
  }
};

parseArgs();
