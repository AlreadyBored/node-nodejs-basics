const printCurrencyPath = () => {
  console.log(`You are currently in ${process.cwd()}`)
  process.stdout.write('> ')
}

const printGreeting = (username) => {
  console.log(`Welcome to the File Manager, ${username}!`)
  printCurrencyPath()
}

const printInvalidInputError = () => {
  console.log('Invalid input')
  printCurrencyPath()
}

export { printCurrencyPath, printGreeting, printInvalidInputError }
