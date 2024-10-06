import path from 'path';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const readStream = createReadStream(path.join(__dirname, 'files/fileToRead.txt'), 'utf-8');

    readStream.on('data', (chunk) => console.log(chunk));
};

await read();