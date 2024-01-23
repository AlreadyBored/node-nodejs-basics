const parseEnv = () => {
  const prefix = 'RSS_'

  const allEnvVariables = process.env
  const suitableVariables = []

  for (const [key, value] of Object.entries(allEnvVariables)) {
    if (key.startsWith(prefix)) {
      suitableVariables.push(`${key}=${value}`)
    }
  }

  const outputSeparator = '; '
  console.log(suitableVariables.join(outputSeparator));
}

parseEnv()
