import fs from "fs/promises"
const remove = async () => {
  const filePath = 'src/fs/files/fileToRemove.txt'
  try {
      await fs.rm(filePath)
  } catch (error) {
    throw new Error('FS operation failed');
    
  }
}

await remove()
