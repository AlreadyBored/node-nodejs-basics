const parseArgs = () => {
  const envArgs = process.argv
  const envArgsParsed = envArgs.reduce((acc, arg, index, array) => {
    if (arg.startsWith('--')) {
      acc.push(`${arg.slice(2)} is ${array[index + 1]}`)
    }
    return acc
  }, [])

  console.log(envArgsParsed.join(', '))
};

parseArgs();
