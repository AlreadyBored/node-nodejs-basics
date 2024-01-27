import fs from 'node:fs'
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const targetFilePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    const stream = fs.createWriteStream(targetFilePath);

    process.stdin.pipe(stream);
};

await write();
