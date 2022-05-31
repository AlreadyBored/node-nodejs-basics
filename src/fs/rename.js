export const rename = async () => {
  import { access, rename } from 'fs/promises';
  import { fileURLToPath } from 'url'
  import { dirname, join } from 'path'

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)
  const before = join(__dirname, 'wrongFilename.txt')
  const after = join(__dirname, 'properFilename.md')

  const isBeforeFileExists = await exists(before)
  const isAfterFileExists = await exists(after)
  if (!isBeforeFileExists || isAfterFileExists) throw new Error('FS operation failed')


  async function main() {
    try {
      await rename(before, after);
    } catch {
      console.error(`The file ${before} could not be renamed`);
    }
  }
  await main()

  async function exists(path) {
    try {
      await access(path)
      return true
    } catch {
      return false
    }
  }
};