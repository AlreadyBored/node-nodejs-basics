export const copy = async () => {
  import { access, mkdir, readdir, copyFile } from 'fs/promises';
  import { fileURLToPath } from 'url'
  import { dirname, join } from 'path'

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)
  const pathFrom = join(__dirname, 'files')
  const pathTo = join(__dirname, 'files_copy')

  const isFromFolderExists = await exists(pathFrom)
  const isToFolderExists = await exists(pathTo)
  if (!isFromFolderExists || isToFolderExists) throw new Error('FS operation failed')


  async function main() {
    const isFolderCreated = await createFolder(pathTo)
    if (!isFolderCreated) throw new Error(`The older ${pathTo} could not be created.`)

    const files = await getFileNamesFromFolder(pathFrom)
    if (files === -1) throw new Error(`The folder ${pathTo} could not be read.`)

    for (const file of files) {
      const source = join(pathFrom, file)
      const destination = join(pathTo, file)
      try {
        await copyFile(source, destination);
      } catch {
        console.error(`The file ${file} could not be copied`);
      }
    }
  }
  await main()



  async function createFolder(path) {
    try {
      await mkdir(path)
      return true
    } catch {
      return false
    }
  }

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