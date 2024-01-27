import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import path from 'node:path'
import { fileURLToPath } from 'node:url'


const __dirname = path.dirname(fileURLToPath(import.meta.url))
const destinationFile = path.join(__dirname, 'files', 'fileToRead.txt')

const read = async () => {
    // Write your code here 
    const fileToRead = createReadStream(destinationFile)
    fileToRead.pipe(stdout)
};

await read();