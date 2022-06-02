export const parseEnv = () => {
  const result = Object.entries(process.env)
    .filter(([key]) => key.startsWith("RSS"))
    .map(([keys, value]) => `${keys}=${value};`)

  console.log(...result)
}

parseEnv()
