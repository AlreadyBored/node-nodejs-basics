import fs from 'node:fs'
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const targetFilePath = path.join(__dirname, 'files', 'fileToRead.txt');
    const stream = fs.createReadStream(targetFilePath);
    stream.pipe(process.stdout)
};

await read();
