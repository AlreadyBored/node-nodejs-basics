import {createReadStream } from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const read = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');
    const stream = createReadStream(path.resolve(filePath));

    stream.on('data', (data) => {
        process.stdout.write(data);
    });

    stream.on('error', (error) => {
        throw new Error('FS operation failed');
    });

};

await read();
