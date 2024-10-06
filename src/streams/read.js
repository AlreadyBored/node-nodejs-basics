import { createReadStream } from 'fs'; 
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    // Write your code here 
    const filePath = resolve(__dirname, 'files', 'fileToRead.txt');

    // create a readable stream from the file
    const fileStream = createReadStream(filePath, { encoding: 'utf-8' });

    fileStream.on('error', (error) => {
        console.error('Error reading the file:', error.message);
        throw new Error('FS operation failed');
    });

    fileStream.pipe(process.stdout);
};

await read();