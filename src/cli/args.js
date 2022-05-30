export const parseArgs = () => {
  const args = process.argv.slice(2);

  console.log(`propName is ${args[1]}, prop2Name is ${args[3]}`);
};
