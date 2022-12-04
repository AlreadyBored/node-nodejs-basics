import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

export const filename = fileURLToPath(import.meta.url);
export const dirname = path.dirname(filename);

export const read = async () => {
    const stream = fs.createReadStream(path.join(dirname, 'files', 'fileToRead.txt'));
    stream.pipe(process.stdout);
};

await read();