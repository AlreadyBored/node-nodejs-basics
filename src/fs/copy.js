import { stat as fsStat, copyFile as fsCopyFile, mkdir as fsMkdir, readdir } from 'fs/promises'
import { join as pathJoin, dirname as pathDirname  } from 'path'
import { fileURLToPath } from 'node:url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = pathDirname(__filename)


const startFolder = 'files'
const addition = '_copy'
const newFolder = `${startFolder}${addition}`
const startFolderPath = pathJoin(__dirname, startFolder)
const newFolderPath = pathJoin(__dirname, newFolder)
const errorMessage = 'FS operation failed'


async function exists(path){

    try{

        await fsStat(path)
        return true

    }catch{

        return false

    }

}



const copy = async () => {

    if( !!(await exists(startFolderPath)) && !(await exists(newFolderPath))){

        const [filesInStartFolder] = await Promise.all([readdir(startFolderPath), fsMkdir(newFolderPath)])
        const promises = filesInStartFolder.map( file => fsCopyFile(pathJoin(startFolderPath, file), pathJoin(newFolderPath, file)))
        await Promise.all(promises)

    }else{

      throw new Error(errorMessage)

    }

}

await copy()
