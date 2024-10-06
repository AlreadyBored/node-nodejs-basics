import { createWriteStream } from 'fs'; 
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    // Write your code here 
    const filePath = resolve(__dirname, 'files', 'fileToWrite.txt');
    
    const writeStream = createWriteStream(filePath, { flags: 'a' });

    writeStream.on('error', (error) => {
        console.error('Error writing to the file:', error.message);
        throw new Error('FS operation failed');
    });

    process.stdin.pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('Data written to fileToWrite.txt successfully.');
    });
};

await write();