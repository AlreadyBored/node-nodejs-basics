import {fileURLToPath} from 'url';
import {join, dirname} from 'path';
import {createWriteStream} from 'fs';

const write = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, 'files', 'fileToWrite.txt');

    const stream = createWriteStream(filePath);
    process.stdin.pipe(stream);
    process.stdin.on('error', () => {
        throw new Error('FS operation failed');
    });
    stream.on('error', () => {
        throw new Error('FS operation failed');
    });
};

await write();