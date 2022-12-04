const parseEnv = () => {
  // Write your code here
  const filteredVars = Object.entries(process.env).filter(([key]) => key.startsWith("RSS_"))
  const parsedVars = filteredVars.map(([key, value]) => `${key}=${value}`)
  console.log(parsedVars.join("; "))
}

parseEnv()
