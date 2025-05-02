import path from 'node:path'
import { printCurrencyPath } from './output.js'

const handleCdCommand = (input) => {
  const targetPath = input.slice(3)
  const resolvedPath = path.resolve(process.cwd(), targetPath)

  try {
    process.chdir(resolvedPath)
  } catch (err) {
    console.error('\nOperation failed:', err.message, '\n')
  }

  printCurrencyPath()
}

const handleUpCommand = () => {
  const resolvedPath = path.resolve(process.cwd(), '../')

  try {
    process.chdir(resolvedPath)
  } catch (err) {
    console.error('\nOperation failed:', err.message, '\n')
  }

  printCurrencyPath()
}

export { handleCdCommand, handleUpCommand }
