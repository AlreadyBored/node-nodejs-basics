import fs from 'node:fs/promises'

const printCurrencyPath = () => {
  console.log(`\nYou are currently in ${process.cwd()}`)
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

const printLs = async () => {
  try {
    const currentDir = process.cwd()
    const files = await fs.readdir(currentDir, { withFileTypes: true })

    const table = files.map((file, index) => ({
      index: index + 1,
      name: file.name,
      type: file.isDirectory() ? 'directory' : 'file',
    }))

    console.log(`\n${'Index'.padEnd(8)} | ${'Name'.padEnd(21)} | Type`)
    console.log('-'.repeat(50))

    table.forEach((item) => {
      const styledName = `\x1b[32m${item.name}\x1b[0m`
      const styledType = `\x1b[32m${item.type}\x1b[0m`

      console.log(`${String(item.index).padEnd(8)} | ${styledName.padEnd(30)} | ${styledType}`)
    })

    console.log()
  } catch (err) {
    console.error('\nOperation failed:', err.message, '\n')
  }

  printCurrencyPath()
}

export { printCurrencyPath, printGreeting, printInvalidInputError, printLs }
