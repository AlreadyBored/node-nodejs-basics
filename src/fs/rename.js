import { existsSync } from 'node:fs'
import { rename as renameFile } from 'node:fs/promises'
import { resolve } from 'path'
import { cwd } from 'process'

export const rename = async () => {
  try {
    const fileToPath = resolve(cwd(), 'src/fs/files', 'wrongFilename.txt')
    const fileFromPath = resolve(cwd(), 'src/fs/files', 'properFilename.md')

    if (
      existsSync(fileFromPath) ||
      (existsSync(fileToPath) && existsSync(fileFromPath))
    )
      throw new Error('The file exists')

    await renameFile(fileToPath, fileFromPath)
  } catch (error) {
    console.error(new Error('FS operation failed'))
  }
}

rename()
