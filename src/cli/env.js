const parseEnv = () => {
  // Write your code here

  const envInfo = process.env
  const stringOutput = Object.entries(envInfo).reduce((acc, [key, value]) => {
    const parsed = key.startsWith('RSS') ? `${key}=${value}` : null

    if (parsed) {
      return [...acc, parsed]
    } else {
      return acc
    }
  }, [])
  console.log(stringOutput.join('; '))
}

parseEnv()
