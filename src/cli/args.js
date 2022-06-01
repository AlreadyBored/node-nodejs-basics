import { argv } from 'node:process'

export const parseArgs = () => {
  argv
    .slice(2)
    .reduce((acc, key, i, arr, value = arr[i + 1]) => {
      return !(i % 2) && value ? acc.push(`${key} is ${value}`) && acc : acc
    }, [])
    .forEach((item) => {
      console.log(item)
    })

  //   A better solution :D
  //   const valueArgv = argv.slice(2)

  //   for (let i = 0; i < valueArgv.length; i += 2) {
  //     if (valueArgv[i + 1]) {
  //       console.log(`${valueArgv[i]} is ${valueArgv[i + 1]}`)
  //     }
  //   }
}

parseArgs()
