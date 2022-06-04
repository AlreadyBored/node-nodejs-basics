import { argv } from 'process'

export const parseArgs = () => {
  const obj = argv.slice(2).reduce((acc, value, idx, arr) => {
    if (idx % 2 === 0) acc[value] = arr[idx + 1]
    return acc
  }, {})

  Object.entries(obj).forEach(([key, value]) =>
    console.log(`${key} is ${value},`),
  )
}

parseArgs()
