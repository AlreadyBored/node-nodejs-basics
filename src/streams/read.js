import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';

export const read = async () => { 
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const path = resolve(__dirname, 'files', 'fileToRead.txt');
    const rs = createReadStream(path);
    rs.pipe(process.stdout);
};

read();