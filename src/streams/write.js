import fs from 'fs';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const write = async () => {
    // Write your code here 
    const filePath = path.join(__dirname, 'fileToWrite.txt');

    const writableStream = fs.promises.createWriteStream(filePath);

    process.stdin.pipe(writableStream);

    writableStream.on('finish', () => {
        console.log(`Data has been written to ${filePath}`);
    });

    writableStream.on('error', (error) => {
        console.error(`Error writing to the file: ${error.message}`);
    });
};

await write();