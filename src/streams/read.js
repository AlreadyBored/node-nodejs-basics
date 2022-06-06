import { readFile } from 'fs/promises';
import path from 'path';

export const read = async () => {
    const text = await readFile(path.join(path.resolve(), 'files', 'fileToRead.txt'));

    process.stdout.write(text);
};
