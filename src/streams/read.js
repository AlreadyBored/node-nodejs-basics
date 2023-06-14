import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const readStream = createReadStream(path.resolve(__dirname, 'files', 'fileToRead.txt'));
    await pipeline(readStream, process.stdout);
};

await read();