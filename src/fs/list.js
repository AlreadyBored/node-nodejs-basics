import { readdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import { cwd } from 'node:process'

export const list = async () => {
  try {
    const folderToPath = resolve(cwd(), 'src/fs', 'files')
    const files = await readdir(folderToPath)
    console.log(files)
  } catch (error) {
    console.error(new Error('FS operation failed'))
  }
}

list()
