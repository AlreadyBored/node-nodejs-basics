import { createReadStream } from 'fs';
import path from 'path';

const read = async () => {
    const filePath = path.join('files', 'fileToRead.txt'); 
    const fileStream = createReadStream(filePath);
    // get chunk from datafile and write it
    fileStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
    fileStream.on('error', (err) => {
        console.error('Error occurred:', err);
    });
};

await read();
