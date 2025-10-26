const parseArgs = () => {
  const res = process.argv.slice(2);
  // considering that all pairs have both keys and values
  const length = res.length / 2
  const keys = res.filter((arg, i) => i % 2 === 0 && arg.startsWith('--'))
  const cleanKeys = keys.map(key => key.replace(/^--/, ''))
  const values = res.filter((arg, i) => i % 2 === 1 && !arg.startsWith('--') )
  for (let i = 0; i < length; i++)
    if (cleanKeys !== undefined && values !== undefined)
    console.log(`${cleanKeys[i]} is ${values[i]}`)

}

parseArgs();
