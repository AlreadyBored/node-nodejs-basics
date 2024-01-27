import fs from 'fs';
import path from 'path';

const __dirname = import.meta.dirname;

const folderName = 'files';
const fileName = 'fileToWrite.txt';
const filePath = path.join(__dirname, folderName, fileName);

const write = async () => {
    try {
        const writable = fs.createWriteStream(filePath, { encoding: 'utf8' });

        process.stdin.pipe(writable);

        writable.on('finish', () => {
            console.log(`Data written to ${fileName}`);
        });

        writable.on('error', (err) => {
            console.error('Error writing to the file:', err);
        });
    } catch (error) {
        throw new Error(error);
    }
}

await write();