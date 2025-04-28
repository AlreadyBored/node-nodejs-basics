import { createReadStream } from 'fs';
import { join } from 'path';

const read = async () => {
    const filesPath = join('files', 'fileToRead.txt');
    const stream = createReadStream(filesPath);

    stream.on('error', () => {
        throw new Error('FS operation failed');
    });

    stream.pipe(process.stdout);
};

await read();
