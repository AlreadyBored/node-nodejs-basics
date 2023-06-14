import { resolve } from 'node:path';
import { getPath } from '../fs/utils.js';
import fs from 'node:fs';

const read = async () => {
    const __dirname = getPath(import.meta.url);
    const rs = fs.createReadStream(resolve(__dirname, 'files', 'fileToRead.txt'));

    rs.on('data', chunk => process.stdout.write(chunk));
};

await read();