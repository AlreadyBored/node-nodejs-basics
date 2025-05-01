import os from 'node:os'

process.chdir(os.homedir())

const getUsername = () => {
  const args = process.argv.slice(2)
  const usernameArg = args.find((arg) => arg.startsWith('--username='))

  if (!usernameArg) {
    console.error('Username not provided. Use --username=your_username')
    process.exit(1)
  }

  const username = usernameArg.split('=')[1]

  if (!username) {
    console.error('Username must not be empty. Use --username=your_username')
    process.exit(1)
  }

  return username
}

const logCurrencyPath = () => {
  console.log(`You are currently in ${process.cwd()}`)
}

const logGreeting = () => {
  console.log(`Welcome to the File Manager, ${username}!`)
}

const username = getUsername()

logGreeting()
logCurrencyPath()

process.stdin.setEncoding('utf-8')
process.stdin.on('data', (data) => {
  const input = data.trim()

  if (input === '.exit') {
    exitProgram()
  }

  logCurrencyPath()
})

process.on('SIGINT', exitProgram)

function exitProgram() {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`)
  process.exit(0)
}
