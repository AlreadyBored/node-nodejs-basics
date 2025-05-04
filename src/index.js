import os from 'node:os'

import { getUsername } from './modules/args.js'
import { handleCdCommand, handleUpCommand } from './modules/navigation.js'
import {
  printGreeting,
  printInvalidInputError,
  printLs,
  printOsEol,
  printOsCpus,
  printOsHomedir,
} from './modules/output.js'
import {
  handleCatCommand,
  handleAddCommand,
  handleMkdirCommand,
  handleRnCommand,
  handleCpCommand,
  handleMvCommand,
  handleRmCommand,
} from './modules/fs.js'

process.chdir(os.homedir())

const username = getUsername()

printGreeting(username)

process.stdin.setEncoding('utf-8')
process.stdin.on('data', (data) => {
  const input = data.trim()

  if (input === '.exit') {
    exitProgram()
  } else if (input.startsWith('cd ')) {
    handleCdCommand(input)
  } else if (input === 'up') {
    handleUpCommand()
  } else if (input === 'ls') {
    printLs()
  } else if (input.startsWith('cat ')) {
    handleCatCommand(input)
  } else if (input.startsWith('add ')) {
    handleAddCommand(input)
  } else if (input.startsWith('mkdir ')) {
    handleMkdirCommand(input)
  } else if (input.startsWith('rn ')) {
    handleRnCommand(input)
  } else if (input.startsWith('cp ')) {
    handleCpCommand(input)
  } else if (input.startsWith('mv ')) {
    handleMvCommand(input)
  } else if (input.startsWith('rm ')) {
    handleRmCommand(input)
  } else if (input === 'os --EOL') {
    printOsEol()
  } else if (input === 'os --cpus') {
    printOsCpus()
  } else if (input === 'os --homedir') {
    printOsHomedir()
  } else {
    printInvalidInputError()
  }
})

process.on('SIGINT', exitProgram)

function exitProgram() {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`)
  process.exit(0)
}
