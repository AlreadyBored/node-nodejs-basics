import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import zlib from 'zlib';

const scriptPath=fileURLToPath(import.meta.url)

const dirName=path.dirname(scriptPath)

const pathToOriginFile=path.join(dirName,'files','fileToCompress.txt')

const pathToOutputFile=path.join(dirName,'files','archive.gz')

const compress=async () => {

    try {
        const gZip=zlib.createGzip()

        const readFile=fs.createReadStream(pathToOriginFile)

        const writeFile=fs.createWriteStream(pathToOutputFile)

        readFile.pipe(gZip).pipe(writeFile)

        console.log('Compressed successfully!')

    } catch(error) {
        console.log(error)
    }


};

await compress();