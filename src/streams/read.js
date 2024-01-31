import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

const read = (filePath) => {
    const readStream = createReadStream(filePath);

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    readStream.on('end', () => {
        console.log('\nFile reading completed.');
    });

    readStream.on('error', (error) => {
        console.error(`Error reading file: ${error.message}`);
    });
};

// Convert import.meta.url to the corresponding file path
const currentFilePath = fileURLToPath(import.meta.url);

// Construct an absolute path using dirname
const filePath = resolve(dirname(currentFilePath), 'files/fileToRead.txt');


read(filePath);
