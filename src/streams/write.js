import { createWriteStream } from 'fs';
import { join } from 'path';

const write = async () => {
    const filesPath = join('files', 'fileToWrite.txt');
    const stream = createWriteStream(filesPath);

    stream.on('error', () => {
        throw new Error('FS operation failed');
    });

    process.stdin.pipe(stream);
};

await write();
