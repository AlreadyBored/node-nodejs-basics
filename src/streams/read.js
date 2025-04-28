import {fileURLToPath} from 'url';
import {join, dirname} from 'path';
import {createReadStream} from 'fs';

const read = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, 'files', 'fileToRead.txt');
    console.log(filePath);

    const stream = createReadStream(filePath);
    stream.pipe(process.stdout);
    stream.on('end', () => {
        console.log('');
    });
    stream.on('error', () => {
        throw new Error('FS operation failed');
    });
};

await read();