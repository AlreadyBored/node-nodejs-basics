import { fileURLToPath } from 'url'
import { rm } from 'fs/promises'
import path from 'path'

const remove = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const fileToRemovePath = path.join(__dirname, 'files/fileToRemove.txt')

    await rm(fileToRemovePath)
  } catch (error) {
    throw new Error('FS operation failed')
  }
}

await remove()