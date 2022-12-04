import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

export const filename = fileURLToPath(import.meta.url);
export const dirname = path.dirname(filename);

export const write = async () => {
    const stream = fs.createWriteStream(path.join(dirname, 'files', 'fileToWrite.txt'));
    process.stdin.pipe(stream);
};

await write();