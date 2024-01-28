import { createWriteStream } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const fileName = 'fileToWrite.txt';

const write = async () => {
    try {
        const writable = createWriteStream(
            join(__dirname, 'files', fileName)
        );
        process.stdin.pipe(writable);
    } catch(err) {
        console.log(err.message);
    }
};

await write();