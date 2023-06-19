import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const filePath = path.join(__dirname, 'files/fileToRead.txt');

    if (!existsSync(filePath)) {
        throw new Error ('FS operation failed');
    }

    fs.createReadStream(filePath, 'utf-8').on('data', (chunk) => console.log(chunk));
};

await read();
