const parseArgs = () => {
  let argv = process.argv
  argv.shift(); argv.shift()
  argv = argv.map(val => val.replace(/^--/, ``))

  const argvObj = {}
  let argvPair = []
  let argvElem
  while (undefined !== (argvElem = argv.shift())) {
    switch (argvPair.length) {
      case 2:
        argvObj[argvPair[0]] = argvPair[1]
        argvPair = [argvElem]
        break;

      case 1:
        argvPair.push(argvElem)
        break;

      case 0:
        argvPair.push(argvElem)
        break;
    }
  }
  if (argvPair.length) {
    const [key, value] = [argvPair[0], argvPair[1] ?? '']
    argvObj[key] = value
  }

  const outputArr = Object.keys(argvObj).map(key => {
    const value = argvObj[key]
    return `${key} is ${value}`
  })

  const output = outputArr.join(`, `)

  console.log(output)

  // Write your code here 
};

module.exports = { parseArgs }