import { rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import { cwd } from 'node:process'

export const remove = async () => {
  try {
    const fileToPath = resolve(cwd(), 'src/fs/files', 'fileToRemove.txt')
    await rm(fileToPath)
  } catch (error) {
    console.error(new Error('FS operation failed'))
  }
}

remove()
