export const parseEnv = () => {
  const data = process.env
  return Object.keys(data)
                  .filter(el => el.startsWith('RSS_'))
                  .map(v => `${v}=${data[v]}`)
                  .join('; ')

};

// for testing
console.clear()
console.log(parseEnv())
