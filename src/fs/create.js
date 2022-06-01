import { writeFile } from 'node:fs/promises'
import { resolve } from 'path'
import { cwd } from 'process'

export const create = async () => {
  try {
    const filePath = resolve(cwd(), 'src/fs/files', 'fresh.txt')
    await writeFile(filePath, 'I am fresh and young', {
      flag: 'wx',
    })
  } catch (error) {
    console.error('FS operation failed')
  }
}

create()
