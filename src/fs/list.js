import fs from 'fs/promises'

const list = async () => {
  const folderPath = 'src/fs/files'
  try {
    const fileList = await fs.readdir(folderPath, 'utf-8')
    fileList.forEach(fileName=>{
        console.log(fileName);
    })
  } catch (error) {
    throw new Error('FS operation failed');
  }
}

await list()
