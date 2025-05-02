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

export { getUsername }
