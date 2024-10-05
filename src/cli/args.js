const parseArgs = () => {
  const args = process.argv.slice(2)
  const result = []
  args.forEach((arg, idx) => {
    if (arg.startsWith("--")) {
      const key = arg.slice(2)
      result.push(`${key} is ${args[idx + 1]}`)
    }
  })
  console.log(result.join(", "))
}

parseArgs()
