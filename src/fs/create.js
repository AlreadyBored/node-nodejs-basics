import { writeFile as fsWriteFile } from 'fs/promises';
import { join as pathJoin, dirname as pathDirname  } from 'path'
import { fileURLToPath } from 'node:url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = pathDirname(__filename)


const folderPath = 'files'
const fileName = 'fresh.txt'
const fileContent = 'I am fresh and young'
const errorMessage = 'FS operation failed'
const fullPath = pathJoin(__dirname, folderPath, fileName)


const create = async () => {
    
    try{

      await fsWriteFile(fullPath, fileContent, { flag: 'wx' })

    }catch{

      throw new Error(errorMessage)

    }

}

await create()
