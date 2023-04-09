import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

const scriptPath=fileURLToPath(import.meta.url)

const dirName=path.dirname(scriptPath)

const pathToOriginDir=path.join(dirName,'files')

const pathToNewDir=path.join(dirName,'files_copy')


const copy=async () => {

    try {
        const filesToCopy=fs.readdirSync(pathToOriginDir)

        fs.mkdirSync(pathToNewDir)

        filesToCopy.forEach((file) => {
            const oldFilePath=path.join(pathToOriginDir, file)
            const newFilePath=path.join(pathToNewDir, file)
            fs.copyFileSync(oldFilePath, newFilePath)
        })
        
        console.log('\nCopied successfully!')

    } catch(error) {
        throw new Error('FS operation failed\n')
    }




};

await copy();
