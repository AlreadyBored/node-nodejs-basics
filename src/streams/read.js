import { pipeline } from 'node:stream/promises';
import { createReadStream } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const fileName = 'fileToRead.txt';

const read = async () => {
    try {
        await pipeline(
            createReadStream(
                join(__dirname, 'files', fileName)
            ),
            process.stdout
        );
    } catch(err) {
        console.log(err.message);
    }
};

await read();