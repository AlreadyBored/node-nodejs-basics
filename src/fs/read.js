import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

const scriptPath=fileURLToPath(import.meta.url)

const dirName=path.dirname(scriptPath)

const pathToOriginDir=path.join(dirName,'files', 'fileToRead.txt')


const read=async () => {
    try {
        const fileContent=fs.readFileSync(pathToOriginDir,'utf-8')
        console.log(fileContent);

        console.log('\nRead file successfully!')
    } catch (error) {
        throw new Error('FS operation failed\n')
    }
};

await read();