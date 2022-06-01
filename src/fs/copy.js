import { cp } from 'node:fs/promises'
import { resolve } from 'path'
import { cwd } from 'process'

export const copy = async () => {
  try {
    const folderToPath = resolve(cwd(), 'src/fs', 'files')
    const folderFromPath = resolve(cwd(), 'src/fs', 'files_copy')
    await cp(folderToPath, folderFromPath, {
      errorOnExist: true,
      recursive: true,
      force: false,
    })
  } catch (error) {
    console.error('FS operation failed')
  }
}

copy()
