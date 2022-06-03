import { access, mkdir, readdir, copyFile } from 'fs/promises';
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

export const copy = async () => {
  const from = join(__dirname, 'files')
  const to = join(__dirname, 'files_copy')

  const isFromFolderExists = await exists(from)
  const isToFolderExists = await exists(to)
  if (!isFromFolderExists || isToFolderExists) throw new Error('FS operation failed')

  async function copyDirectory(pathFrom, pathTo){
    const contents = await readdir(pathFrom, {withFileTypes: true})
    await mkdir(pathTo)
    for (const content of contents) {
      const _pathFrom = join(pathFrom, content.name)
      const _pathTo = join(pathTo, content.name)
      if (content.isDirectory()) {
        await copyDirectory(_pathFrom, _pathTo)
      } else {
        await copyFile(_pathFrom, _pathTo)
      }
    }
  }

  await copyDirectory(from, to)
};

//test
console.clear()
await copy()
