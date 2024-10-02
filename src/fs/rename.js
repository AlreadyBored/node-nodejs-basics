import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

export const filename = fileURLToPath(import.meta.url);
export const dirname = path.dirname(filename);

const rename = async () => {
    try {
        const wrongFile = path.join(dirname,'files','wrongFilename.txt');
        const properFile = path.join(dirname,'files','properFilename.md');

        await fs.rename(wrongFile, properFile);
    } catch {
        throw new Error('FS operation failed');
    }
};

await rename();