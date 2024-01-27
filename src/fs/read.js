import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';


const __dirname = path.dirname(fileURLToPath(import.meta.url))
const destinationFile = path.join(__dirname, 'files', 'fileToRead.txt')

const read = async () => {
    // Write your code here 
    try {
       const fileToRead = await readFile(destinationFile,{encoding: 'utf8'})
       console.log(fileToRead)
    }catch(err){
        throw new Error('FS operation failed')
    }
};

await read();