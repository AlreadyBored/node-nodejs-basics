export const parseArgs = () => {
  const args = process.argv.slice(2);
  const cliArgs = args.reduce((acc, arg, index, arr) => {
    const valueProp = arr[index + 1];
    if (arg.startsWith("--") && valueProp) {
      const editedArgs = ars.slice(2);
      const cliArgsEdited = `${editedArgs} is ${valueProp}`;
      acc.push(cliArgsEdited);
    }
    return acc;
  }, []);

  console.log(cliArgs.join(", "));
};

parseArgs();
