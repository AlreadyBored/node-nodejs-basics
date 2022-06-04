export const parseArgs = () => {
  const commandNameFlag = '--';
  const args = process.argv.slice(2);
  const result = args.reduce((res, arg, index) => {
    if(arg.includes(commandNameFlag)) {
         const newArg = arg.replace(commandNameFlag, '')
        res.push(`${newArg} is ${args[index + 1]}`)
    }

    return res;
  }, [])

  console.log(result.join(', '))
};

parseArgs()