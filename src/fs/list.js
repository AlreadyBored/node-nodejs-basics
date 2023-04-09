import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

const scriptPath=fileURLToPath(import.meta.url)

const dirName=path.dirname(scriptPath)

const pathToOriginDir=path.join(dirName,'files')


const list=async () => {
    try {
        const filesList=fs.readdirSync(pathToOriginDir)

        console.log(filesList)
    } catch (error) {
        throw new Error('FS operation failed\n')
    }
};

await list();