export const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = [];
  args.forEach((arg, index) => {
    if (/^--*/.test(arg) && args[index + 1]) {
      result.push(`${arg.slice(2)} is ${args[index + 1]}`);
    }
  });
  console.log(result.join(", "));
};
parseArgs();
