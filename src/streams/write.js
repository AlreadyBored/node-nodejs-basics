import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const write = async () => {
    const writeStream = fs.createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'));

    writeStream.on('error', () => {
        throw new Error('FS operation failed: file could not be written');
    });

    process.stdin.pipe(writeStream);
};

await write();