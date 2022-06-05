export const parseArgs = () => {
  for (const [prop, value] of process.argv.entries()) {
    console.log(`${prop} is ${value}`);
  }
};

parseArgs();
