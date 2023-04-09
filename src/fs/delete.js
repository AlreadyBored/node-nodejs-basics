import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url';

const scriptPath=fileURLToPath(import.meta.url)

const dirName=path.dirname(scriptPath)

const pathToDeleteFile=path.join(dirName,'files','fileToRemove.txt')


const remove=async () => {

    try {
        fs.rmSync(pathToDeleteFile)

        console.log('\nDeleted successfully!')

    } catch(error) {
        throw new Error('FS operation failed\n')
    }
};

await remove();