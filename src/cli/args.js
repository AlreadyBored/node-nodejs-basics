export const parseArgs = () => {
  const args = process.argv.slice(2)

  for (let i = 0; i < args.length; i += 2) {
    if (args[i].startsWith("--")) {
      console.log(`${args[i].slice(2)} is ${args[i + 1]}`)
    } else {
      console.log(`${args[i]} is ${args[i + 1]}`)
    }
  }
}

parseArgs()
