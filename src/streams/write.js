import fs from 'fs'
import path from 'path';
import {fileURLToPath} from 'url';

const scriptPath=fileURLToPath(import.meta.url)

const dirname=path.dirname(scriptPath)

const pathToWriteFile=path.join(dirname, 'files','fileToWrite.txt')

process.stdin.resume();

process.stdin.setEncoding('utf-8');

const write=async () => {
    const ws=fs.createWriteStream(pathToWriteFile);
    
    process.stdin.pipe(ws)

};

await write();