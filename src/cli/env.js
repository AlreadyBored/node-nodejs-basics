const parseEnv = () => {
  Object.entries(process.env).forEach(([key, value]) => {
    if (key.indexOf('RSS_') == 0) console.log(`${key}=${value}`)
  })
}

parseEnv()
