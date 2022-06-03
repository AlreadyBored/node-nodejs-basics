import { access, readFile } from 'fs/promises';
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
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
  const file = join(__dirname, 'files', 'fileToRead.txt')

  const isFileExists = await exists(file)
  if (!isFileExists) throw new Error('FS operation failed')

  try {
    const content = await readFile(file, "utf8" );
    console.log(content)
  } catch {
    console.error(`The file ${file} could not be read`);
  }

};

//test
console.clear()
await read()