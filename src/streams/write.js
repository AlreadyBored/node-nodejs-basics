export const write = async () => {
  import { pipeline } from "stream";
  import { createWriteStream } from "fs";
  import { fileURLToPath } from "url";
  import { dirname, join } from "path";
  import { access } from "fs/promises";

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)
  const path = join(__dirname, 'files', 'fileToWrite.txt')

  const isFileExists = await exists(path)
  if (isFileExists) throw new Error('The file already exists')

  console.clear()
  console.info('Type something. Press CONTROL+C to kill the script.')

  pipeline(
    process.stdin,
    createWriteStream(path),
    (err) => {
      if (err) {
        console.error('Pipeline filed', err)
      } else {
        console.log('Pipeline succeeded')
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