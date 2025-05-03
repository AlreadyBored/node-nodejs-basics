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
    console.log('\n')
    printCurrencyPath()
  })

  readStream.on('error', (err) => {
    console.error('\nOperation failed:', err.message, '\n')
    printCurrencyPath()
  })
}

export { handleCatCommand }
