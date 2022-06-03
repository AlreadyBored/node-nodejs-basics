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
  let content = ''
  try {
    content = await readFile(file, "utf8" );
  } catch {
    console.error(`The file ${file} could not be read`);
  }
  return content
};

//test
console.clear()
console.log(await read())