import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const writeFilePath = '/files/fileToWrite.txt';

const write = async () => {
    try {
        const writeStream = createWriteStream(path.join(__dirname, writeFilePath), {
            flags: 'rs+',
        });

        process.stdin.pipe(writeStream);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await write();