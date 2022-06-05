import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
    const stream = fs.createReadStream(`${__dirname}/files/fileToRead.txt`);

    stream.pipe(process.stdout)
};

read();
