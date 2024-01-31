import { createWriteStream } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const write = (fileName) => {
    const filePath = resolve(dirname(fileURLToPath(import.meta.url)), fileName);
    const writeStream = createWriteStream(filePath);

    process.stdin.setEncoding('utf-8');

    process.stdin.on('data', (chunk) => {
        writeStream.write(chunk);
    });

    process.stdin.on('end', () => {
        writeStream.end();
        console.log(`Data written to ${filePath}`);
    });

    process.stdin.on('error', (error) => {
        console.error(`Error reading from stdin: ${error.message}`);
    });

    writeStream.on('error', (error) => {
        console.error(`Error writing to file: ${error.message}`);
    });
};

// Replace 'fileToWrite.txt' with the desired file name
const fileName = 'fileToWrite.txt';
write(fileName);
