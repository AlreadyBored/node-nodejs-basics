import { access, rename as fsRename } from 'fs/promises';
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

export const rename = async () => {
  const before = join(__dirname, 'files', 'wrongFilename.txt')
  const after = join(__dirname, 'files', 'properFilename.md')

  const isBeforeFileExists = await exists(before)
  const isAfterFileExists = await exists(after)
  if (!isBeforeFileExists || isAfterFileExists) throw new Error('FS operation failed')

  try {
    await fsRename(before, after);
  } catch {
    console.error(`The file ${before} could not be renamed`);
  }

};

// test
console.clear()
await rename()