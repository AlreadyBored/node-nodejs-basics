import fs from 'fs/promises';
import {exists} from 'node:fs'

const rename = async () => {
  const oldPath = 'src/fs/files/wrongFilename.txt'
  const newPath = 'src/fs/files/properFilename.md'
  exists(newPath, (error)=>{
    if (error) {
    throw new Error('FS operation failed')
    }else{
        try {
          fs.rename(oldPath, newPath)
        } catch (error) {
          throw new Error('FS operation failed')
        }
    }
  })
}

await rename()
