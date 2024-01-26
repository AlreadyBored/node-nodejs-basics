import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { access, constants, createReadStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    access(filePath, constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });

    const readStream = createReadStream(filePath, 'utf8');
    
    readStream.on('data', (chunk) => {
        process.stdout.write(chunk + '\n');
    })

    readStream.on('error', (err) => {
        console.error('An error has occurred:', err.message);
    });
};

await read();