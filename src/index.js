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
  printOsUsername,
  printCalculatedHash
} from './modules/output.js'
import {
  handleCatCommand,
  handleAddCommand,
  handleMkdirCommand,
  handleRnCommand,
  handleCpCommand,
  handleMvCommand,
  handleRmCommand,
  handleCompressCommand,
  handleDecompressCommand
} from './modules/fs.js'

process.chdir(os.homedir())

const username = getUsername()

printGreeting(username)

process.stdin.setEncoding('utf-8')
process.stdin.on('data', (data) => {
  const input = data.trim()
  switch (true) {
    case input === '.exit': exitProgram(); break
    case input.startsWith('cd '): handleCdCommand(input); break
    case input === 'up': handleUpCommand(); break
    case input === 'ls': printLs(); break
    case input.startsWith('cat '): handleCatCommand(input); break
    case input.startsWith('add '): handleAddCommand(input); break
    case input.startsWith('mkdir '): handleMkdirCommand(input); break
    case input.startsWith('rn '): handleRnCommand(input); break
    case input.startsWith('cp '): handleCpCommand(input); break
    case input.startsWith('mv '): handleMvCommand(input); break
    case input.startsWith('rm '): handleRmCommand(input); break
    case input === 'os --EOL': printOsEol(); break
    case input === 'os --cpus': printOsCpus(); break
    case input === 'os --homedir': printOsHomedir(); break
    case input === 'os --username': printOsUsername(); break
    case input === 'os --architecture': printOsArchitecture(); break
    case input.startsWith('hash '): printCalculatedHash(input); break
    case input.startsWith('compress '): handleCompressCommand(input); break
    case input.startsWith('decompress '): handleDecompressCommand(input); break
    default: printInvalidInputError()
  }
})

process.on('SIGINT', exitProgram)

function exitProgram() {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`)
  process.exit(0)
}
