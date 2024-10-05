const parseEnv = () => {
  const prefix = "RSS_"
  const vars = Object.entries(process.env)
    .filter(([key]) => key.startsWith(prefix))
    .map(([key, value]) => `${key}=${value}`)
    .join("; ")

  console.log(vars)
}

parseEnv()
