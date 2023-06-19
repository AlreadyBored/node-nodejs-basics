import { readdir as fsReaddir } from 'fs/promises'
import { join as pathJoin, dirname as pathDirname } from 'path'
import { fileURLToPath } from 'node:url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = pathDirname(__filename)

const startFolder = 'files'
const errorMessage = 'FS operation failed'
const currentFilePath = pathJoin(__dirname, startFolder)


const list = async () => {

    try{

        const insideContent = await fsReaddir(currentFilePath)
        console.log(insideContent)

    }catch{

        throw new Error(errorMessage)

    }

}

await list()
