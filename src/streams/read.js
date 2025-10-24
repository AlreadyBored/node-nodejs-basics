import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const read = async () => {
    const filePath = join(_dirname, 'files', 'fileToRead.txt');
    const readableStream = createReadStream(filePath, { encoding: 'utf-8' });

    return new Promise((resolve, reject) => {
        let content = '';

        readableStream.on('data', (chunk) => {
            content += chunk;
        });

        readableStream.on('end', () => {
            console.log(content);
            resolve();
        });

        readableStream.on('error', reject);
    });
};

await read();