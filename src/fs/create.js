import { writeFile, access } from 'fs/promises';
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


export const create = async () => {
  const PATH = join(__dirname, 'files', 'fresh.txt')
  const CONTENT = 'I am fresh and young'

  const isFileExists = await exists(PATH)
  if (isFileExists) throw new Error('FS operation failed')

  try {
    await writeFile(PATH, CONTENT)
  } catch (e) {
    console.error(e)
  }

};

//test
console.clear()
await create()