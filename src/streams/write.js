import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    // Creating the path to the file to write
    const filePath = path.join(__dirname, 'files',  'fileToWrite.txt');

    // Creating a write stream for the file
    const writeStream = fs.createWriteStream(filePath);

    // Redirecting data from stdin to the file
    process.stdin.pipe(writeStream);

    // Event handling
    writeStream.on('finish', () => {
        console.log('File writing completed.');
    });

    writeStream.on('error', (error) => {
        console.error(`An error occurred while writing to the file: ${error.message}`);
    });

    // Closing the write stream when stdin ends
    process.stdin.on('end', () => {
        writeStream.end();
        console.log('Data input finished.');
    });
};

await write();