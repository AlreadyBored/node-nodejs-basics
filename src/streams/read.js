import { open } from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

export const filename = fileURLToPath(import.meta.url);
export const dirname = path.dirname(filename);

export const read = async () => {
    const fd = await open(path.join(dirname, 'files', 'fileToRead.txt'));
    const stream = fd.createReadStream();
    stream.pipe(process.stdout);
};

await read();