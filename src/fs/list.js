import { access, readdir } from 'fs/promises';
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

export const list = async () => {
  const path = join(__dirname, 'files')
  const isFolderExists = await exists(path)
  if (!isFolderExists) throw new Error('FS operation failed')

  const getFileNamesFromFolder = async (path) => {
    try {
      return await readdir(path)
    } catch {
      return -1
    }
  }

  const files = await getFileNamesFromFolder(path)
  if (files === -1) throw new Error(`The folder ${path} could not be readed.`)

  return files.join('\n')
};

// test
console.clear()
process.stdout.write(await list())