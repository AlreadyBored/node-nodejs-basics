import { createWriteStream } from 'fs';
import { resolve } from 'path';

const write = async () => {
    const filePath = resolve('files', 'fileToWrite.txt');
    const writeStream = createWriteStream(filePath, { encoding: 'utf-8' });

    process.stdin.pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('Data has been written to fileToWrite.txt successfully.');
    });

    writeStream.on('error', (error) => {
        console.error('Error writing to file:', error.message);
    });
};

await write();
