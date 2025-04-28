import { createReadStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const DIRNAME = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const filesPath = join(DIRNAME, 'files', 'fileToRead.txt');
    const stream = createReadStream(filesPath);

    stream.on('error', () => {
        throw new Error('FS operation failed');
    });

    stream.pipe(process.stdout);
};

await read();
