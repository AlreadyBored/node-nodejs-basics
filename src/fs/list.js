export const list = async () => {
  import { access, readdir } from 'fs/promises';
  import { fileURLToPath } from 'url'
  import { dirname, join } from 'path'

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)
  const path = join(__dirname, 'files')

  const isFolderExists = await exists(path)
  if (!isFolderExists) throw new Error('FS operation failed')


  async function main() {
    const files = await getFileNamesFromFolder(path)
    if (files === -1) throw new Error(`The folder ${path} could not be readed.`)

    console.clear()
    process.stdout.write(files.join('\n'))
  }
  await main()


  async function getFileNamesFromFolder(path) {
    try {
      return await readdir(path)
    } catch {
      return -1
    }
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