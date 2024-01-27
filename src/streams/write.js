import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';
import path from 'node:path'
import { fileURLToPath } from 'node:url'


const __dirname = path.dirname(fileURLToPath(import.meta.url))
const destinationFile = path.join(__dirname, 'files', 'fileToWrite.txt')

const write = async () => {
    // Write your code here 
    // Write your code here
    const writable = createWriteStream(destinationFile,{encoding:'utf8'}) 
    stdin.on('data', (data) => {
        writable.write(data,() => {})
        console.log('line is written to the file')
    })
};

await write();