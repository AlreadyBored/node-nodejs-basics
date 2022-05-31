export const create = async () => {
  import { writeFile, access } from 'fs/promises';
  import { fileURLToPath } from 'url'
  import { dirname, join } from 'path'

  const CONTENT = 'I am fresh and young'

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)
  const PATH = join(__dirname, 'fresh.txt')

  const isFileExists = await exists(PATH)
  if (isFileExists) throw new Error('FS operation failed')

  try {
    await writeFile(PATH, CONTENT)
  } catch (e) {
    console.error(e)
  }

  async function exists(path) {
    try {
      await access(path)
      return true
    } catch {
      return false
    }
  }

};