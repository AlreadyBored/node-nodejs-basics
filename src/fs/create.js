import fs from 'fs/promises'

const create = async () => {
  const content = 'I am fresh and young!'
  const filePath = 'src/fs/files/fresh.txt'
  try {
    await fs.appendFile(filePath, content, { flag: 'wx' })
  } catch (error) {
    throw new Error('FS operation failed')
  }
}

await create()
