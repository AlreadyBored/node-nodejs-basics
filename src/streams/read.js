import { pipeline } from "stream";
import { createReadStream } from "fs";
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

export const read = async () => {
  const path = join(__dirname, 'files', 'fileToRead.txt')
  const isFileExists = await exists(path)
  if (!isFileExists) throw new Error('File not exists')

  pipeline(
    createReadStream(path), process.stdout,
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
await read()