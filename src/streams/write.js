import { createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const DIRNAME = dirname(fileURLToPath(import.meta.url));

const write = async () => {
    const filesPath = join(DIRNAME, 'files', 'fileToWrite.txt');
    const stream = createWriteStream(filesPath);

    stream.on('error', () => {
        throw new Error('FS operation failed');
    });

    process.stdin.pipe(stream);
};

await write();
