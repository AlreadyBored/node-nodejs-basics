const parseArgs = () => {
  // Write your code here
  const args = process.argv.slice(2)
  const parsedArgs = []

  args.forEach((arg, i) => {
    if (i % 2 === 0) parsedArgs.push(`${arg.replace("--", "")} is`)
    else parsedArgs.push(`${parsedArgs.pop()} ${arg}`)
  })

  console.log(parsedArgs.join(", "))
}

parseArgs()
