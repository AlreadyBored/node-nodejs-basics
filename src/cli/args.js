const parseArgs = () => {
  const args = process.argv.slice(2)

  const result = args.reduce((acc, i, index, arr) => {
    const val = arr[index + 1]

    if (val && i.indexOf('--') === 0) {
      const transformedArg = i.slice(2)

      acc.push(`${transformedArg} is ${val}`)
    }

    return acc
  }, [])

  console.log(result)
}

parseArgs()
