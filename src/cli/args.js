const parseArgs = () => {
  // Write your code here
  const argsInfo = process.argv.splice(2)
  const stringOutput = argsInfo.reduce((acc, value, index, array) => {
    const parsed =
      value.startsWith('--') && array[index + 1]
        ? `${value.replace('--', '')} is ${argsInfo[index + 1]}`
        : null

    if (parsed) {
      return [...acc, parsed]
    } else {
      return acc
    }
  }, [])
  console.log(stringOutput.join(', '))
}

parseArgs()
