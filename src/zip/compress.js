export const compress = async () => {
  import { pipeline } from "stream";
  import { createReadStream, createWriteStream } from "fs";
  import { fileURLToPath } from "url";
  import { dirname, join } from "path";
  import { access } from "fs/promises";
  import zlib  from 'zlib';

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)
  const path = join(__dirname, 'files', 'fileToCompress.txt')
  const pathOutput = join(__dirname, 'files', 'archive.gz')

  const isFileExists = await exists(path)
  if (!isFileExists) throw new Error('File not exists')

  const gzip = zlib.createGzip()
  const source = createReadStream(path)
  const destination = createWriteStream(pathOutput)

  console.clear()
  pipeline(
    source, gzip, destination, (err) => {
      if (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
      }
    }
  )



  async function exists(path) {
    try {
      await access(path)
      return true
    } catch {
      return false
    }
  }
};