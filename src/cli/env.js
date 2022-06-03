export const parseEnv = () => {
  const data = process.env
  return Object.keys(data)
                  .filter(el => el.startsWith('RSS_'))
                  .map(v => `${v}=${data[v]}`)
                  .join('; ')

};

// test
console.clear()
console.log(parseEnv())
