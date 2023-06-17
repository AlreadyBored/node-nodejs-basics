import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILE_PATH = path.join(__dirname, 'files', 'fileToRead.txt')

const read = async () => {
    const readableStream = createReadStream(FILE_PATH, 'utf-8');
    readableStream.on('data', chunk => process.stdout.write(chunk));
};

await read();