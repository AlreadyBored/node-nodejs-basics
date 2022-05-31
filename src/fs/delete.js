export const remove = async () => {
  import { access, rm } from 'fs/promises';
  import { fileURLToPath } from 'url'
  import { dirname, join } from 'path'

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)
  const file = join(__dirname, 'fileToRemove.txt')

  const isFileExists = await exists(file)
  if (!isFileExists) throw new Error('FS operation failed')


  async function main() {
    try {
      await rm(file );
    } catch {
      console.error(`The file ${file} could not be removed`);
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