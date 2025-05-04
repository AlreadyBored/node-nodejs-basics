import * as fs from 'node:fs'
import * as fsPromises from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import crypto from 'node:crypto'

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
    const files = await fsPromises.readdir(currentDir, { withFileTypes: true })

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

const printOsEol = () => {
  const eol = JSON.stringify(os.EOL)

  console.log(`Default system End-Of-Line: ${eol}`)
  printCurrencyPath()
}

const printOsCpus = () => {
  const cpus = os.cpus()

  console.log(`\nOverall CPUs: ${cpus.length}\n`)

  cpus.forEach((cpu, index) => {
    const model = cpu.model
    const speedGHz = (cpu.speed / 1000).toFixed(2)

    console.log(`CPU ${index + 1}:`)
    console.log(`  Model: ${model}`)
    console.log(`  Clock Rate: ${speedGHz} GHz\n`)
  })

  printCurrencyPath()
}

const printOsHomedir = () => {
  const homeDir = os.homedir()

  console.log(`\nHome directory: ${homeDir}`)

  printCurrencyPath()
}

const printOsUsername = () => {
  const username = os.userInfo().username

  console.log(`\nSystem username: ${username}`)
  printCurrencyPath()
}

const printOsArchitecture = () => {
  const architecture = os.arch()

  console.log(`\nCPU architecture: ${architecture}`)
  printCurrencyPath()
}

const printCalculatedHash = (input) => {
  const filePath = input.slice(4).trim()
  if (!filePath) {
    console.error('\nInvalid input. Usage: hash path_to_file')
    return
  }

  const absPath = path.resolve(filePath)
  const hash = crypto.createHash('sha256')
  const stream = fs.createReadStream(absPath)

  stream.on('error', (err) => {
    console.error('\nOperation failed:', err.message)
    printCurrencyPath()
  })

  stream.on('data', (chunk) => {
    hash.update(chunk)
  })

  stream.on('end', () => {
    const digest = hash.digest('hex')

    console.log(`\nSHA256: ${digest}`)
    printCurrencyPath()
  })
}


export {
  printCurrencyPath,
  printGreeting,
  printInvalidInputError,
  printLs,
  printOsEol,
  printOsCpus,
  printOsHomedir,
  printOsUsername,
  printOsArchitecture,
  printCalculatedHash
}
