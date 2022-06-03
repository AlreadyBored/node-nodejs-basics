import { pipeline } from "stream";
import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { access } from "fs/promises";
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const exists = async(path) => {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

export const write = async () => {
  const path = join(__dirname, 'files', 'fileToWrite.txt')
  const isFileExists = await exists(path)
  if (isFileExists) throw new Error('The file already exists')
  process.stdin.on('data', function(data) {
    if (data.toString().includes(':wq')) {
      process.stdout.write('Saving...\n')
      process.exit(0)
    }
  })
  pipeline(
    process.stdin, createWriteStream(path),
    (err) => {
      if (err) {
        console.error('Pipeline filed', err)
      } else {
        console.log('Pipeline succeeded')
      }
    }
  )
};

// test
console.clear()
await write()
console.log(
  `Type something.
  
  To save end exit: 
  1. press Enter/return.
  2. type ":wq" 
  3. press Enter/return.`
)