const parseArgs = () => {
  const result = process.argv
    .reduce((acc, arg, idx, args) => {
      if (!arg.indexOf("--")) {
        acc.push(`${arg.slice(2)} is ${args[idx + 1]}`)
      }

      return acc
    }, [])
    .join(", ")

  console.log(result)
};

parseArgs();
