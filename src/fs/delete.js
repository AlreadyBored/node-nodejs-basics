import { access, rm } from 'fs/promises';
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

export const remove = async () => {
  const file = join(__dirname, 'files', 'fileToRemove.txt')

  const isFileExists = await exists(file)
  if (!isFileExists) throw new Error('FS operation failed')

  try {
    await rm(file );
  } catch {
    console.error(`The file ${file} could not be removed`);
  }

};

//test
console.clear()
await remove()