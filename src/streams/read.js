import fs from 'fs'
import readline from 'readline'
import path from 'path';
import {fileURLToPath} from 'url';

const scriptPath=fileURLToPath(import.meta.url)

const dirName=path.dirname(scriptPath)

const pathToReadFile=path.join(dirName, 'files', 'fileToRead.txt')

const read=async () => {
    
    readline.createInterface({
        input: fs.createReadStream(pathToReadFile),
        output: process.stdout,
        terminal: true
    })

};

await read();