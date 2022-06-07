import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
    const stream = fs.createReadStream(`${__dirname}/files/fileToRead.txt`);
    stream.pipe(process.stdout);
};

read();