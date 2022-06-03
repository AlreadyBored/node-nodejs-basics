import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { access } from "fs/promises";
import zlib  from 'zlib';
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

export const decompress = async () => {
  const pathArchive = join(__dirname, 'files', 'archive.gz')
  const pathOutput = join(__dirname, 'files', 'fileToCompress1.txt')

  const isFileExists = await exists(pathArchive)
  if (!isFileExists) throw new Error('File not exists')

  const source = createReadStream(pathArchive)
  const destination = createWriteStream(pathOutput)
  const unzip = zlib.createGunzip()

  pipeline(
    source,unzip, destination, (err) => {
      if (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
      }
    }
  )

};

// test
console.clear()
await decompress()