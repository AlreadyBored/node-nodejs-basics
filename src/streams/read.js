import fs from 'fs';
import path from 'path';

const __dirname = import.meta.dirname;

const folderName = 'files';
const fileName = 'fileToRead.txt';
const filePath = path.join(__dirname, folderName, fileName);

const read = async () => {
    try {
        const readable = fs.createReadStream(filePath, { encoding: 'utf8' });

        readable.on('data', (chunk) => {
            process.stdout.write(chunk)
        });

        readable.on('end', () => {
            console.log('end');
        });

        readable.on('error', (err) => {
            console.error('Error reading the file:', err);
        });
    } catch (error) {
        throw new Error(error);
    }
}
await read();
