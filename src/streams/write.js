import { createWriteStream } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filePath = join(__dirname, 'files', 'fileToWrite.txt');

    return new Promise((resolve, reject) => {
        const writeStream = createWriteStream(filePath);

        writeStream.on('error', (err) => {
            reject(err);
        });

        process.stdin.pipe(writeStream);

        process.stdin.on('end', () => {
            resolve();
        });
    });
};

await write();