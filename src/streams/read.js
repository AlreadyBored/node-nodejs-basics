import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const readableStream = fs.createReadStream(path.join(__dirname, 'files/fileToRead.txt'), 'utf-8');
    readableStream.on('data', chunk => process.stdout.write(chunk));
};

await read();