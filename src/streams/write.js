import { promises as fsPromises, createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const write = async () => {
    const fileSourcePath = path.join(__dirname, 'fileToWrite.txt');

    const fileWriteStream = createWriteStream(fileSourcePath);

    process.stdin.on('readable', () => {
        const chunk = process.stdin.read();
        if (chunk !== null) {
            fileWriteStream.write(chunk);
        }
    });

    process.stdin.on('end', () => {
        // Close the writable stream when the input from stdin ends
        fileWriteStream.end()
    });

    fileWriteStream.on('finish', () => {
        console.log(`Data has been written to ${fileSourcePath}`)
    });
    
    fileWriteStream.on('error', (err) => {
        console.error('Error:', err)
    });
};

await write()