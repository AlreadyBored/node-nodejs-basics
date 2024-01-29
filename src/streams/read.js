import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));

    const readableStream = createReadStream(join(__dirname, 'files', 'fileToRead.txt'), { encoding: 'utf-8' });

    readableStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    return new Promise((resolve, reject) => {
        readableStream.on('end', resolve);
        readableStream.on('error', reject);
    });
};

await read();