import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createWriteStream } from 'node:fs';
import process from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const path = join(__dirname, 'files', 'fileToWrite.txt');

    try {
        const writeStream = createWriteStream(path);
        
        process.stdin.on('data', (chunk) => {
            writeStream.write(chunk.toString());
        })
    } catch (err) {
        throw err;
    }
};

await write();