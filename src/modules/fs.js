import fs from 'node:fs'
import path from 'node:path'
import { printCurrencyPath } from './output.js'

const handleCatCommand = (input) => {
  const filePath = input.slice(4).trim()
  const fullPath = path.resolve(process.cwd(), filePath)
  const readStream = fs.createReadStream(fullPath, 'utf-8')

  readStream.on('data', (chunk) => {
    process.stdout.write(chunk)
  })

  readStream.on('end', () => {
    printCurrencyPath()
  })

  readStream.on('error', (err) => {
    console.error('\nOperation failed:', err.message, '\n')
    printCurrencyPath()
  })
}

const handleAddCommand = (input) => {
  const fileName = input.slice(4).trim()
  const filePath = process.cwd()

  fs.writeFile(`${filePath}/${fileName}`, '', (err) => {
    if (err) {
      console.error('\nOperation failed:', err.message,)
      printCurrencyPath()
    }
  })

  printCurrencyPath()
}

const handleMkdirCommand = (input) => {
  const dirName = input.slice(6).trim()
  const filePath = process.cwd()

  fs.mkdir(`${filePath}/${dirName}`, { recursive: true }, (err) => {
    if (err) {
      console.error('\nOperation failed:', err.message,)
      printCurrencyPath()
    }
  }); 
}

export { handleCatCommand, handleAddCommand, handleMkdirCommand }
