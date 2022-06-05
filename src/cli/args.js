export const parseArgs = () => {
  let argv_array = [];
  for (let i = 2; i < process.argv.length; i += 2) {
    argv_array.push(`${process.argv[i].slice(2)} is ${process.argv[i + 1]}`);
  }
  console.log(argv_array.join(', '));
};
parseArgs();
