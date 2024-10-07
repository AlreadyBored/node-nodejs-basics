import { fileURLToPath } from 'url';
import path from 'path';
import { createReadStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    // Write your code here
    const readStream = createReadStream(filePath, 'utf8');
    readStream.pipe(process.stdout);

};

await read();