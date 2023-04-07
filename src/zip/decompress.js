import fs from 'fs'
import path from 'path';
import {fileURLToPath} from 'url';
import zlib from 'zlib';

const scriptPath=fileURLToPath(import.meta.url)

const dirName=path.dirname(scriptPath)

const pathToOriginFile=path.join(dirName,'files','archive.gz')

const pathToOutuptFile = path.join(dirName, 'files', 'fileToCompress.txt')

const decompress=async () => {

        const unZip=zlib.createUnzip()
    
        const readFile=fs.createReadStream(pathToOriginFile)

        const writeFile=fs.createWriteStream(pathToOutuptFile)
    
        readFile.pipe(unZip).pipe(writeFile)


    

};

await decompress();