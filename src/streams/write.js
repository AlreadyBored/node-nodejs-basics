import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const write = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));

    const writableStream = createWriteStream(join(__dirname, 'files', 'fileToWrite.txt'), { encoding: 'utf-8' });

    process.stdin.pipe(writableStream);

    return new Promise((resolve, reject) => {
        writableStream.on('finish', resolve);
        writableStream.on('error', reject);
    });
};

await write();