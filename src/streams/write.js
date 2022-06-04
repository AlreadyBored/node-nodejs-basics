import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
    const stream = fs.createWriteStream(`${__dirname}/files/fileToWrite.txt`);
    process.stdin.pipe(stream);
};